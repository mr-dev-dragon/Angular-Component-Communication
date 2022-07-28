import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentComponent } from './perent.component';

describe('PerentComponent', () => {
  let component: PerentComponent;
  let fixture: ComponentFixture<PerentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
