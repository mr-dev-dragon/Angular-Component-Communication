import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromComponent } from './from/from.component';
import { AlertComponent } from './alert/alert.component';
import { ImgComponent } from './img/img.component';



@NgModule({
  declarations: [
    FromComponent,
    AlertComponent,
    ImgComponent
  ],
  imports: [
    CommonModule,
    AlertComponent,
    FromComponent,
    ImgComponent


  ],
  exports: [FromComponent, AlertComponent, ImgComponent],
  
})
export class ParentInfoModule { }
