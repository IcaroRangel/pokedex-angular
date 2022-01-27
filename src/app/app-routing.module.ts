import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokeFeedComponents } from "./components/pokemon/poke-feed/poke-feed.component";
import { PokeInfosComponent } from "./components/pokemon/poke-infos/poke-infos.component";

const routes: Routes = [
  {
    path: "pokemons",
    component: PokeFeedComponents,
  },
  {
    path: "pokemons/:id",
    component: PokeInfosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
