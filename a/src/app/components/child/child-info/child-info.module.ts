import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { FromComponent } from './from/from.component';
import { ImgComponent } from './img/img.component';



@NgModule({
  declarations: [AlertComponent, FromComponent, ImgComponent],
  imports: [CommonModule, AlertComponent, FromComponent, ImgComponent],
  exports: [AlertComponent, FromComponent, ImgComponent],
})
export class ChildInfoModule {}
