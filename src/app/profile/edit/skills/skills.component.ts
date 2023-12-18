import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ColorService } from '../../../shared/services/color.service';
import { Skill } from '../../../data/profile.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  @Input() skills: Skill[];
  @Output() skillsChange = new EventEmitter<Skill[]>();

  public skillForm: FormGroup;
  public skillInputForm: FormGroup;

  constructor(private fb: FormBuilder, private colorService: ColorService) {}

  ngOnInit(): void {
    this.createForm();
    this.setSkills(this.skills || []);
    this.listenChanges();
  }

  createForm() {
    this.skillForm = this.fb.group({
      skills: this.fb.array([]),
    });
    this.skillInputForm = this.fb.group({
      newSkill: ['', Validators.required],
    });
  }

  private setSkills(skills: Skill[]) {
    const skillGFs = skills.map((language) => this.fb.group(language));
    const skillsFormArray = this.fb.array(skillGFs);
    this.skillForm.setControl('skills', skillsFormArray);
  }

  private listenChanges() {
    this.skillForm.valueChanges.subscribe((skills) => {
      this.skillsChange.emit(skills.skills);
    });
  }

  get skillsArray(): FormArray {
    return this.skillForm.get('skills') as FormArray;
  }

  get isAddButtonActive(): boolean {
    return this.skillInputForm.valid;
  }

  remove(index: number) {
    console.log(this.skillForm.value.skills);
    this.skillsArray.removeAt(index);
    this.skillsChange.emit(this.skillForm.value.skills);
  }

  addNew() {
    if (this.skillInputForm.valid) {
      const newSkill: Skill = {
        value: this.skillInputForm.value.newSkill,
        color: this.colorService.randomColor(),
      };

      this.skillsArray.push(this.fb.group(newSkill));
      this.skillsChange.emit(this.skillsArray.value);
      this.clearAll();
    }
  }

  clearAll() {
    this.skillInputForm.reset();
  }
}
