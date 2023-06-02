import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSchedulecommonComponent } from './saved-schedulecommon.component';

describe('SavedSchedulecommonComponent', () => {
  let component: SavedSchedulecommonComponent;
  let fixture: ComponentFixture<SavedSchedulecommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedSchedulecommonComponent]
    });
    fixture = TestBed.createComponent(SavedSchedulecommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
