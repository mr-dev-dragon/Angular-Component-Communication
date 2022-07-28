import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { PerentComponent } from './components/perent/perent.component';
import { AlertComponent } from './components/alert/alert.component';
import { FromComponent } from './components/from/from.component';
import { ImgComponent } from './components/img/img.component';



@NgModule({
  declarations: [
    ChildComponent,
    PerentComponent,
    AlertComponent,
    FromComponent,
    ImgComponent,
  ],
  imports: [CommonModule],
  exports: [ChildComponent, PerentComponent, AlertComponent, FromComponent],
  providers: [],
  bootstrap: [PerentComponent],
})
export class MychildModule {}
