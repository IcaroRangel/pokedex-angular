import { Component, Input, OnInit } from "@angular/core";
import Pokemon from "../models/poke.model";
import { Type } from "../models/type.model";
import { PokemonService } from "../services/poke.service";

@Component({
  selector: "app-poke-feed",
  templateUrl: "poke-feed.component.html",
  styleUrls: ["./poke-feed.component.css"],
})
export class PokeFeedComponents implements OnInit {
  @Input() pokemons: Pokemon[] = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.read();
  }

  navigateToInfos() {}
}
