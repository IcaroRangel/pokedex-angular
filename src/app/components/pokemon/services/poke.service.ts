import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { firstValueFrom, from, map, mergeMap, Observable } from "rxjs";
import Pokemon from "../models/poke.model";

type PokemonMin = {
  url: string;
  name: string;
};

interface ResponsePokemon {
  results: [PokemonMin];
}

@Injectable({ providedIn: "root" })
export class PokemonService {
  baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  constructor(private http: HttpClient) {}

  async findAllPokemons() {
    const data = await firstValueFrom(
      this.http.get<ResponsePokemon>(this.baseUrl)
    );

    const linksPromises = data.results.map((pokemon) => {
      return firstValueFrom(this.http.get(pokemon.url));
    });

    const resultPromises = await Promise.all(linksPromises);

    const pokemons = resultPromises.map((pokeData: any) => {
      const pokemon: Pokemon = {
        id: pokeData.id,
        name: pokeData.name,
        image: pokeData.sprites.front_default,
        types: pokeData.types.map((t: any) => t.type.name),
      };
      return pokemon;
    });
    return pokemons;
  }

  readById(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Pokemon>(url);
  }
}
