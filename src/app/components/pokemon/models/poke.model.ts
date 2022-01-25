import { Type } from "./type.model";

export default interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  image: string;
}
