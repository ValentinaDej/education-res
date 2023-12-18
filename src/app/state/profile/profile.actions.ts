import { Profile } from '../../data/profile.model';

export class UpdateProfile {
  static readonly type = '[Profile] Update';
  constructor(public profile: Profile) {
    console.log('UpdateProfile ', profile);
  }
}

export class SetProfile {
  static readonly type = '[Profile] Set';

  constructor(public profile: Profile) {
    console.log('SetProfile ', profile);
  }
}
