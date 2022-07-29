import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentalertComponent } from './perentalert.component';

describe('PerentalertComponent', () => {
  let component: PerentalertComponent;
  let fixture: ComponentFixture<PerentalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerentalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
