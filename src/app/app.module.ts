import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RaceListModule} from './modules/application/race-list/race-list.module';
import {RaceDetailModule} from './modules/application/race-detail/race-detail.module';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./modules/general/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {FooterModule} from './components/footer/footer.module';
import {HeaderModule} from "./components/header/header.module";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    RaceListModule,
    RaceDetailModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
