import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsPage } from './neows-page';

describe('NeowsPage', () => {
  let component: NeowsPage;
  let fixture: ComponentFixture<NeowsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeowsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeowsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
