import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppTitleComponent } from './components/app-title/app-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { CardImgComponent } from './components/card-img/card-img.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AppTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    CardImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
