import axios, { AxiosInstance } from 'axios';
import { SERVER_ENTRY_POINT } from '../constants/serverEntryPoint';
import { PokemonListDto } from '../dtos/PokemonListDto';
import { IntroPokemon } from '../types/IntroPokemon';
import { EntityEnum } from './../enums/EntityEnum';

export class PokeControl {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: SERVER_ENTRY_POINT,
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
