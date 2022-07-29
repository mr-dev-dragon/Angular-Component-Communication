import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildalertComponent } from './childalert/childalert.component';
import { PerentalertComponent } from './perentalert/perentalert.component';



@NgModule({
  declarations: [
    ChildalertComponent,
    PerentalertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
