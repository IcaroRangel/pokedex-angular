import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PokeFeedComponents } from "./components/poke-feed/poke-feed.component";
import { PokeInfosComponent } from "./components/poke-infos/poke-infos.component";

@NgModule({
  declarations: [AppComponent, PokeFeedComponents, PokeInfosComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
