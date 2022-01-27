import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import Pokemon from "../models/poke.model";
import { PokemonService } from "../services/poke.service";

@Component({
  selector: "app-poke-feed",
  templateUrl: "poke-feed.component.html",
  styleUrls: ["./poke-feed.component.css"],
})
export class PokeFeedComponents implements OnInit {
  @Input() pokemons: Pokemon[] = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.read().subscribe((pokemons: any) => {
      this.pokemons = pokemons;
    });
  }

  navigateToInfos() {}
}
