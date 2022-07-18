import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFooterComponent } from './footer-footer.component';

describe('FooterFooterComponent', () => {
  let component: FooterFooterComponent;
  let fixture: ComponentFixture<FooterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
