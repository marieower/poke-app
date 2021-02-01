import { IntroPokemonDto } from './../dtos/IntroPokemonDto';
import { EntityEnum } from './../enums/EntityEnum';
import axios, { AxiosInstance } from 'axios';
import { serverEntryPoint } from '../constants/serverEntryPoint';
import { IntroPokemon } from '../types/IntroPokemon';
import { PokemonListDto } from '../dtos/PokemonListDto';

export class PokeControl {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: serverEntryPoint,
      timeout: 20000,
    });
  }

  public getAll = async (): Promise<IntroPokemon[]> => {
    const response = await this.axios.get<PokemonListDto>(EntityEnum.Pokemon);

    return response.data.results.map(({ name, url }) => {
      const id = url.split('/')[6];
      return {
        id,
        name,
      };
    });
  };

  public getPokemon = () => {};

  public getAbility = () => {};
}
