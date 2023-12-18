import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { SetProfile, UpdateProfile } from './profile.actions';
import { Profile } from '../../data/profile.model';

@State<Profile>({
  name: 'profile',
  defaults: {
    name: '',
    position: '',
    contact: [],
    description: '',
    skills: [],
    education: [],
    links: [],
    languages: [],
  },
})
@Injectable()
export class ProfileState {
  @Action(SetProfile)
  setProfile(ctx: StateContext<Profile>, action: SetProfile) {
    ctx.setState(action.profile);
  }

  @Action(UpdateProfile)
  updateProfile(ctx: StateContext<Profile>, action: UpdateProfile) {
    ctx.setState(action.profile);
  }
}
