import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentfromComponent } from './perentfrom.component';

describe('PerentfromComponent', () => {
  let component: PerentfromComponent;
  let fixture: ComponentFixture<PerentfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerentfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
