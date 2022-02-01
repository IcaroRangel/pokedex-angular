import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Pokemon from "../models/poke.model";
import { PokemonService } from "../services/poke.service";

@Component({
  selector: "app-poke-infos",
  templateUrl: "poke-infos.component.html",
  styleUrls: ["poke-infos.component.css"],
})
export class PokeInfosComponent implements OnInit {
  pokemon: Pokemon;
  id: string | null;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.pokemonService.readById(Number(this.id)).subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
    }
  }
}
