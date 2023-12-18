import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerComponent } from './baner.component';
import { MatCardModule } from '@angular/material/card';

describe('BanerComponent', () => {
  let component: BanerComponent;
  let fixture: ComponentFixture<BanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanerComponent],
      imports: [MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
