import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNavigator } from './date-navigator';

describe('DateNavigator', () => {
  let component: DateNavigator;
  let fixture: ComponentFixture<DateNavigator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateNavigator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateNavigator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
