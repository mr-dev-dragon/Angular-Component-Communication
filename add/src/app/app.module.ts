import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllModule } from './components/all/all.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , AllModule],
  exports: [AllModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
