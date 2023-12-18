import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Profile } from '../data/profile.model';
import { ProfileSelectors } from '../state/profile/profile.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Select(ProfileSelectors.getProfile) profile$: Observable<Profile>;
}
