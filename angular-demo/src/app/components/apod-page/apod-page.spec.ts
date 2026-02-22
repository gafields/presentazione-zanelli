import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodPage } from './apod-page';

describe('ApodPage', () => {
  let component: ApodPage;
  let fixture: ComponentFixture<ApodPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
