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
  @Input() pokemons: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get("id");
    this.pokemonService.readInfos(id).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
