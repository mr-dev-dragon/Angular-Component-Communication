import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterHeaderComponent } from './footer-header/footer-header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterFooterComponent } from './footer-footer/footer-footer.component';



@NgModule({
  declarations: [FooterHeaderComponent, FooterComponent, FooterFooterComponent],
  imports: [CommonModule],
  exports: [FooterHeaderComponent, FooterComponent, FooterFooterComponent],
})
export class FooterModule {}
