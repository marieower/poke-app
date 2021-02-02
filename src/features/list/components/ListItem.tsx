import React from 'react';
import { usePokeImg } from '../../../hooks/UsePokeImg';
import { IntroPokemon } from '../../../types/IntroPokemon';

interface Props {
  item: IntroPokemon;
}

export const ListItem: React.FC<Props> = ({ item }) => {
  const { name, id } = item;

  const imageURL = usePokeImg(id);

  return (
    <div>
      <h5>{name}</h5>
      <img src={imageURL} alt={name} />
    </div>
  );
};
