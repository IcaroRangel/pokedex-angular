import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { firstValueFrom, from, map, mergeMap, Observable } from "rxjs";
import PokeInfos from "../models/poke-infos.model";
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
  constructor(private http: HttpClient) {}

  async findAllPokemons() {
    const data = await firstValueFrom(
      this.http.get<ResponsePokemon>(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      )
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

  readById(id: number): Observable<PokeInfos> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<PokeInfos>(url);
  }
}
