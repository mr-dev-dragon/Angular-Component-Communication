import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,

    HeaderComponent,
    HeroSectionComponent,
  ],
  imports: [CommonModule, MatSliderModule, MatToolbarModule, MatIconModule],
  exports: [
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    HeroSectionComponent,
    MatSidenavModule,
  ],
})
export class HeaderModule {}
