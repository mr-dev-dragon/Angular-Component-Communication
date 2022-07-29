import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ParentInfoModule } from './parent-info/parent-info.module';



@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ParentInfoModule
  ]
  ,
  exports: [ParentComponent]
})
export class ParentModule { }
