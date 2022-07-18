import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CantinaerComponent } from './cantinaer/cantinaer.component';
import { GMapModule } from 'primeng/gmap';


@NgModule({
  declarations: [
    CantinaerComponent
  ],
  imports: [
    CommonModule,
    GMapModule
  ]
})
export class MainModule { }
