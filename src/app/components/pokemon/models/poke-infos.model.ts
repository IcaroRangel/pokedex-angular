import Pokemon from "./poke.model";

export default interface PokeInfos extends Pokemon {
  height: number;
  base_experience: number;
  weight: number;
  types: [{ type: { name: string } }];
}
