import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { GithubIconComponent } from '../shared/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../shared/icons/linkedin-icon/linkedin-icon.component';

@NgModule({
  declarations: [ProfileComponent, GithubIconComponent, LinkedinIconComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
  ],
})
export class ProfileModule {}
