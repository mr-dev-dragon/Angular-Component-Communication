
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildModule } from './components/child/child.module';
import { ParentModule } from './components/parent/parent.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule,
    ChildModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
