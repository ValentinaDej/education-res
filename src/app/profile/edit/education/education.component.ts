import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Education } from '../../../data/profile.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @Input() educations: Education[];
  @Output() educationUpdate = new EventEmitter<Education[]>();

  public educationForm: FormGroup;
  public educationInputForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.setEducations(this.educations || []);
    this.listenChanges();
  }

  createForm() {
    this.educationForm = this.fb.group({
      educations: this.fb.array([]),
    });
    this.educationInputForm = this.fb.group({
      newYear: ['', Validators.required],
      newCourse: ['', Validators.required],
      newInstitution: ['', Validators.required],
    });
  }

  private setEducations(educations: Education[]) {
    const educationFGs = educations.map((education) =>
      this.fb.group(education)
    );
    const educationFormArray = this.fb.array(educationFGs);
    this.educationForm.setControl('educations', educationFormArray);
  }

  private listenChanges() {
    this.educationForm.valueChanges.subscribe((educations) => {
      this.educationUpdate.emit(educations.educations);
    });
  }

  get educationsArray(): FormArray {
    return this.educationForm.get('educations') as FormArray;
  }

  get isAddButtonActive(): boolean {
    return this.educationInputForm.valid;
  }

  remove(index: number) {
    this.educationsArray.removeAt(index);
    this.educationUpdate.emit(this.educationForm.value.educations);
  }

  addNew() {
    if (this.educationInputForm.valid) {
      const newEducation: Education = {
        year: this.educationInputForm.value.newYear,
        course: this.educationInputForm.value.newCourse,
        institution: this.educationInputForm.value.newInstitution,
      };

      this.educationsArray.push(this.fb.group(newEducation));
      this.educationUpdate.emit(this.educationsArray.value);
      this.clearAll();
    }
  }

  clearAll() {
    this.educationInputForm.reset();
  }
}
