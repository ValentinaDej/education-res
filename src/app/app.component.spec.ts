import { TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgxsModule, Store } from "@ngxs/store";
import { NavComponent } from "./nav/nav.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PROFILE } from "./data/mock-profile";
import { SetProfile } from "./state/profile/profile.actions";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, NavComponent],
      imports: [
        MatToolbarModule,
        NgxsModule.forRoot([]),
        RouterModule.forRoot([]),
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Stady Today'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("Stady Today");
  });

  it("should dispatch SetProfile action on initialization", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, "dispatch");
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(new SetProfile(PROFILE));
  });
});
