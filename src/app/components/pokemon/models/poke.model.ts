export default interface Pokemon {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
  image: string;
}
