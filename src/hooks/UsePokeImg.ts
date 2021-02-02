import { IMAGE_ENTRY_POINT } from '../constants/imageEntryPoint';

export const usePokeImg = (id: string): string => {
  return `${IMAGE_ENTRY_POINT}${id}.png`;
};
