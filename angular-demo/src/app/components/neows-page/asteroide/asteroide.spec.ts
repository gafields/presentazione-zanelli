import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asteroide } from './asteroide';

describe('Asteroide', () => {
  let component: Asteroide;
  let fixture: ComponentFixture<Asteroide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asteroide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asteroide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
