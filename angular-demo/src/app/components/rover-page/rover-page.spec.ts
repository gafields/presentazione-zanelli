import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverPage } from './rover-page';

describe('RoverPage', () => {
  let component: RoverPage;
  let fixture: ComponentFixture<RoverPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoverPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoverPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
