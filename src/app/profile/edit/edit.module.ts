import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit-routing.module';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { LinksComponent } from './links/links.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    EditComponent,
    CapitalizePipe,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    LinksComponent,
    ContactsComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    FlexLayoutModule,
    MatTableModule,
    MatExpansionModule,
  ],
})
export class EditModule {}
