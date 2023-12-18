import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Language } from '../../../data/profile.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css',
})
export class LanguagesComponent {
  @Input() languages: Language[];
  @Output() languageUpdate = new EventEmitter<Language[]>();

  public languageForm: FormGroup;
  public languageInputForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.setLanguages(this.languages || []);
    this.listenChanges();
  }

  createForm() {
    this.languageForm = this.fb.group({
      languages: this.fb.array([]),
    });
    this.languageInputForm = this.fb.group({
      newLanguage: ['', Validators.required],
      newProficiency: ['', Validators.required],
    });
  }

  private setLanguages(languages: Language[]) {
    const languageGFs = languages.map((language) => this.fb.group(language));
    const languageFormArray = this.fb.array(languageGFs);
    this.languageForm.setControl('languages', languageFormArray);
  }

  private listenChanges() {
    this.languageForm.valueChanges.subscribe((languages) => {
      this.languageUpdate.emit(languages.languages);
    });
  }

  get languagesArray(): FormArray {
    return this.languageForm.get('languages') as FormArray;
  }

  get isAddButtonActive(): boolean {
    return this.languageInputForm.valid;
  }

  remove(index: number) {
    this.languagesArray.removeAt(index);
    this.languageUpdate.emit(this.languageForm.value.languages);
  }

  addNew() {
    if (this.languageInputForm.valid) {
      const newLanguage: Language = {
        language: this.languageInputForm.value.newLanguage,
        proficiency: this.languageInputForm.value.newProficiency,
      };

      this.languagesArray.push(this.fb.group(newLanguage));
      this.languageUpdate.emit(this.languagesArray.value);
      this.clearAll();
    }
  }

  clearAll() {
    this.languageInputForm.reset();
  }
}
