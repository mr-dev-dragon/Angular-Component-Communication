
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';


import { AccordionModule } from 'primeng/accordion';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AccordionModule ,   HeaderModule ,FooterModule ,MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
