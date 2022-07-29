import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildimgComponent } from './childimg.component';

describe('ChildimgComponent', () => {
  let component: ChildimgComponent;
  let fixture: ComponentFixture<ChildimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
