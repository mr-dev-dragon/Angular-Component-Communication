import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildfromComponent } from './childfrom.component';

describe('ChildfromComponent', () => {
  let component: ChildfromComponent;
  let fixture: ComponentFixture<ChildfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
