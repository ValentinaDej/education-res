import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ProfileState } from './state/profile/profile.state';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { CourseDetailsComponent } from './home/courses/course-details/course-details.component';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './home/courses/courses.component';
import { BanerComponent } from './home/baner/baner.component';

import { CustomMatPaginatorIntl } from './shared/components/custom-mat-paginatorIntl';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CoursesComponent,
    BanerComponent,
    CourseDetailsComponent,
  ],
  imports: [
    NgxsModule.forRoot([ProfileState]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
