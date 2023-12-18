import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [MatToolbarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have links to profile and edit pages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const profileLink = compiled.querySelector('button[routerLink="/profile"]');
    const editLink = compiled.querySelector('button[routerLink="/edit"]');
    expect(profileLink).toBeTruthy();
    expect(editLink).toBeTruthy();
  });
});
