import { ChildInfoModule } from './child-info/child-info.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [


    ChildComponent
  ],
  imports: [
    CommonModule,
    ChildInfoModule
  ]
  ,
  exports: [ChildComponent]
})
export class ChildModule { }
