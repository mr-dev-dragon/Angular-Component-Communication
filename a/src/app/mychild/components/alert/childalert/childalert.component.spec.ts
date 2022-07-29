import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildalertComponent } from './childalert.component';

describe('ChildalertComponent', () => {
  let component: ChildalertComponent;
  let fixture: ComponentFixture<ChildalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
