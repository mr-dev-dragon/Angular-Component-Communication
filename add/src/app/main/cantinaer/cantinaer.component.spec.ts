import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantinaerComponent } from './cantinaer.component';

describe('CantinaerComponent', () => {
  let component: CantinaerComponent;
  let fixture: ComponentFixture<CantinaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantinaerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantinaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
