import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { from, map, mergeMap, Observable, ReplaySubject } from "rxjs";
import Pokemon from "../models/poke.model";

@Injectable({ providedIn: "root" })
export class PokemonService {
  @Input() pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  read(): any {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    return this.http
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

  readInfos(id: number): Observable<Pokemon> {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const url = `${baseUrl}/${id}`;

    return this.http.get<Pokemon>(url);
  }
}
