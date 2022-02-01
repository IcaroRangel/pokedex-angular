import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import PokeInfos from "../models/poke-infos.model";
import { PokemonService } from "../services/poke.service";

@Component({
  selector: "app-poke-infos",
  templateUrl: "poke-infos.component.html",
  styleUrls: ["poke-infos.component.css"],
})
export class PokeInfosComponent implements OnInit {
  public pokemon: PokeInfos;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get("id");
    this.pokemonService.readById(id).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }
  back() {
    this.router.navigate(["/"]);
  }
}
