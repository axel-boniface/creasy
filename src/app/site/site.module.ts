import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';

@NgModule({
  declarations: [
    SiteComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
  ],
  exports: [
    SiteComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
  ],
})
export class SiteModule { }
