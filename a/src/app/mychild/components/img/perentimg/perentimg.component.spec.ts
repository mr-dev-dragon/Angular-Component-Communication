import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentimgComponent } from './perentimg.component';

describe('PerentimgComponent', () => {
  let component: PerentimgComponent;
  let fixture: ComponentFixture<PerentimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerentimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
