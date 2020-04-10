import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import localeCa from "@angular/common/locales/ca";

import { AppComponent } from "./app.component";
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localeEs);
registerLocaleData(localeCa);

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
