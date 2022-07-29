import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildfromComponent } from './childfrom/childfrom.component';
import { PerentfromComponent } from './perentfrom/perentfrom.component';



@NgModule({
  declarations: [
    ChildfromComponent,
    PerentfromComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FromModule { }
