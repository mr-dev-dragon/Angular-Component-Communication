import { AlertModule } from './components/alert/alert.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { PerentComponent } from './components/perent/perent.component';
import { AlertComponent } from './components/alert/alert.component';
import { FromComponent } from './components/from/from.component';
import { ImgComponent } from './components/img/img.component';
import { ImgModule } from './components/img/img.module';
import { FromModule } from './components/from/from.module';



@NgModule({
  declarations: [
    ChildComponent,
    PerentComponent,
    AlertComponent,
    FromComponent,
    ImgComponent,
  ],
  imports: [
    CommonModule,
    AlertModule,
    ImgModule,
    FromModule


  ],
  exports: [ChildComponent, PerentComponent, AlertComponent, FromComponent],
  providers: [],
  bootstrap: [PerentComponent],
})
export class MychildModule {}
