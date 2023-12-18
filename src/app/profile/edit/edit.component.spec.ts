import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditComponent } from './edit.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from '../profile.component';
import { PROFILE } from '../../data/mock-profile';
import { UpdateProfile } from '../../state/profile/profile.actions';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let store: Store;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditComponent,
        AboutComponent,
        ContactsComponent,
        EducationComponent,
        LanguagesComponent,
        LinksComponent,
        SkillsComponent,
        CapitalizePipe,
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatChipsModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        NgxsModule.forRoot([]),
        RouterTestingModule.withRoutes([
          { path: 'profile', component: ProfileComponent },
        ]),
      ],
      providers: [FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(PROFILE));

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with profile data', () => {
    expect(component.educationsCh).toEqual(PROFILE.education);
    expect(component.languagesCh).toEqual(PROFILE.languages);
    expect(component.linksCh).toEqual(PROFILE.links);
    expect(component.skillsCh).toEqual(PROFILE.skills);
    expect(component.contactsCh).toEqual(PROFILE.contact);
    expect(component.aboutCh).toEqual({
      name: PROFILE.name,
      position: PROFILE.position,
      description: PROFILE.description,
    });
  });

  it('should update educations on onEducationUpdate call', () => {
    const newEducations = [
      { year: '2024', course: 'New Course', institution: 'New Institution' },
    ];
    component.onEducationUpdate(newEducations);
    expect(component.educationsCh).toEqual(newEducations);
  });

  it('should update languages on onLanguageUpdate call', () => {
    const newLanguage = [{ language: 'ukrainian', proficiency: 'native' }];
    component.onLanguageUpdate(newLanguage);
    expect(component.languagesCh).toEqual(newLanguage);
  });

  it('should update links on onLinkUpdate call', () => {
    const newLink = [{ name: 'LinkedIn', url: 'https://www.linkedin.com' }];
    component.onLinkUpdate(newLink);
    expect(component.linksCh).toEqual(newLink);
  });

  it('should update skills on onSkillUpdate call', () => {
    const newSkill = [{ value: 'HTML', color: '#FFC300' }];
    component.onSkillUpdate(newSkill);
    expect(component.skillsCh).toEqual(newSkill);
  });

  it('should update contacts on onContactUpdate call', () => {
    const newContact = [
      {
        type: 'phone',
        value: '+38 063 88 69 028',
        icon: 'phone',
      },
    ];
    component.onContactUpdate(newContact);
    expect(component.contactsCh).toEqual(newContact);
  });

  it('should update contacts on onAboutUpdate call', () => {
    const newData = {
      name: 'Name',
      position: 'Position',
      description: 'Description',
    };
    component.onAboutUpdate(newData);
    expect(component.aboutCh).toEqual(newData);
  });

  it('should dispatch UpdateProfile action when form is submitted', () => {
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, 'dispatch');
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith(new UpdateProfile(PROFILE));
  });

  it('should not dispatch UpdateProfile action if form is invalid', () => {
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, 'dispatch');
    component.profileForm.setErrors({ invalid: true });
    component.onSubmit();
    expect(dispatchSpy).not.toHaveBeenCalled();
  });

  it('should show success message on form submission', () => {
    const snackBar = TestBed.inject(MatSnackBar);
    const snackBarSpy = spyOn(snackBar, 'open');

    component.onSubmit();
    expect(snackBarSpy.and.callThrough()).toHaveBeenCalledWith(
      'Form submitted successfully!',
      'Close',
      {
        duration: 3000,
        verticalPosition: 'top',
      }
    );
  });

  it('should navigate to profile page after form submission', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.onSubmit();

    expect(navigateSpy).toHaveBeenCalledWith(['/profile']);
  });
});
