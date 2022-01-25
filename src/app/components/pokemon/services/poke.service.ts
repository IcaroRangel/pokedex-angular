import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, map, mergeMap, ReplaySubject } from "rxjs";
import Pokemon from "../models/poke.model";

@Injectable({ providedIn: "root" })
export class PokemonService {
  public pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    this.http
      .get<any>(baseUrl)
      .pipe(
        map((value) => value.results),
        map((value) => {
          return from(value).pipe(mergeMap((v: any) => this.http.get(v.url)));
        }),
        mergeMap((value) => value)
      )
      .subscribe((result: any) => {
        const pokemon: Pokemon = {
          id: result.id,
          name: result.name,
          image: result.sprites.front_default,
          types: result.types.map((t: any) => t.type.name),
        };

        this.pokemons[result.id] = pokemon;
      });
  }
}
