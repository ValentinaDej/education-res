import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProfileSelectors } from '../../state/profile/profile.selectors';
import { UpdateProfile } from '../../state/profile/profile.actions';

import {
  Education,
  Profile,
  Language,
  Link,
  Skill,
  Contact,
  About,
} from '../../data/profile.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  @Select(ProfileSelectors.getProfile) profile$: Observable<Profile>;
  profileForm: FormGroup;

  educationsCh: Education[];
  languagesCh: Language[];
  linksCh: Link[];
  skillsCh: Skill[];
  contactsCh: Contact[];
  aboutCh: About;

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.profileForm = new FormGroup({});
  }

  ngOnInit() {
    this.profile$
      .pipe(
        tap((profile) => {
          if (profile) {
            this.educationsCh = profile.education;
            this.languagesCh = profile.languages;
            this.linksCh = profile.links;
            this.skillsCh = profile.skills;
            this.contactsCh = profile.contact;
            this.aboutCh = {
              name: profile.name,
              position: profile.position,
              description: profile.description,
            };
          }
        })
      )
      .subscribe();
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedProfile = {
        ...this.profileForm.value,
        education: this.educationsCh,
        languages: this.languagesCh,
        links: this.linksCh,
        skills: this.skillsCh,
        contact: this.contactsCh,
        name: this.aboutCh.name,
        position: this.aboutCh.position,
        description: this.aboutCh.description,
      };
      this.store.dispatch(new UpdateProfile(updatedProfile));
      this.router.navigate(['/profile']);
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }

  onEducationUpdate(educations: Education[]) {
    this.educationsCh = educations;
  }

  onLanguageUpdate(languages: Language[]) {
    this.languagesCh = languages;
  }

  onLinkUpdate(updatedLinks: Link[]) {
    this.linksCh = updatedLinks;
  }

  onSkillUpdate(updatedSkills: Skill[]) {
    this.skillsCh = updatedSkills;
  }

  onContactUpdate(updatedContacts: Contact[]) {
    this.contactsCh = updatedContacts;
  }

  onAboutUpdate(updatedAbout: About) {
    this.aboutCh = updatedAbout;
  }
}
