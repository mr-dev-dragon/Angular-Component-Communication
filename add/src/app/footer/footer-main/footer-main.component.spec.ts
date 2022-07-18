import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainComponent } from './footer-main.component';

describe('FooterMainComponent', () => {
  let component: FooterMainComponent;
  let fixture: ComponentFixture<FooterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
