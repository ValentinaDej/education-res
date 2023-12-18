import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { MatCardModule } from '@angular/material/card';
import { NgxsModule } from '@ngxs/store';
import { ProfileState } from '../../../state/profile/profile.state';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsComponent],
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([ProfileState]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
