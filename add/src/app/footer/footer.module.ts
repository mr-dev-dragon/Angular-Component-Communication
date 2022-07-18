import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterHeaderComponent } from './footer-header/footer-header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterFooterComponent } from './footer-footer/footer-footer.component';
import { FooterMainComponent } from './footer-main/footer-main.component';



@NgModule({
  declarations: [
    FooterHeaderComponent,
    FooterComponent,
    FooterFooterComponent,
    FooterMainComponent,
  ],
  imports: [CommonModule],
  exports: [
    FooterHeaderComponent,
    FooterComponent,
    FooterFooterComponent,
    FooterMainComponent,
  ],
})
export class FooterModule {}
