import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { About } from '../../../data/profile.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @Input() about: About;
  @Output() aboutChange = new EventEmitter<About>();
  public aboutForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.aboutForm = this.fb.group({
      name: [this.about.name || ''],
      position: [this.about.position || ''],
      description: [this.about.description || ''],
    });

    this.aboutForm.valueChanges.subscribe((value) => {
      this.aboutChange.emit(value);
    });
  }

  clear(fieldName: string) {
    this.aboutForm.get(fieldName).reset('');
  }
}
