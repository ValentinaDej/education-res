import { Selector } from '@ngxs/store';
import { ProfileState } from './profile.state';
import { Profile } from '../../data/profile.model';

export class ProfileSelectors {
  @Selector([ProfileState])
  static getProfile(state: ProfileState) {
    return state;
  }

  @Selector([ProfileState])
  static getSkills(state: Profile) {
    return state ? state.skills : [];
  }

  @Selector([ProfileState])
  static getEducation(state: Profile) {
    return state ? state.education : [];
  }
}
