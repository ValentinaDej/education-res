import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetProfile } from './state/profile/profile.actions';
import { PROFILE } from './data/mock-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Stady Today';
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new SetProfile(PROFILE));
  }
}
