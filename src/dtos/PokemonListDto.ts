import { IntroPokemonDto } from './IntroPokemonDto';

export interface PokemonListDto {
  count: number;
  results: IntroPokemonDto[];
}
