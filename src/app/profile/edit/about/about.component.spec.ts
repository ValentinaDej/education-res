import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { About } from '../../../data/profile.model';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let mockAbout: About;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [FormBuilder],
    }).compileComponents();

    mockAbout = {
      name: 'Test Name',
      position: 'Test Position',
      description: 'Test Description',
    };

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    component.about = mockAbout;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.aboutForm.value).toEqual({
      name: mockAbout.name,
      position: mockAbout.position,
      description: mockAbout.description,
    });
  });
});
