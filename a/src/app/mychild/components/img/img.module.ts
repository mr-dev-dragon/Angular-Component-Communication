import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildimgComponent } from './childimg/childimg.component';
import { PerentimgComponent } from './perentimg/perentimg.component';



@NgModule({
  declarations: [
    ChildimgComponent,
    PerentimgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImgModule { }
