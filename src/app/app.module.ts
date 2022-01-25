import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PokeFeedComponents } from "./components/pokemon/poke-feed/poke-feed.component";
import { PokeInfosComponent } from "./components/pokemon/poke-infos/poke-infos.component";

import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { PokeCardComponent } from "./components/pokemon/poke-card/poke-card.component";

@NgModule({
  declarations: [
    AppComponent,
    PokeFeedComponents,
    PokeInfosComponent,
    PokeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
