import React, { useEffect } from 'react';
import { pokeControl } from '../../services';

export const List: React.FC = () => {
  useEffect(() => {
    pokeControl.getAll();
  }, []);
  return <p>blabla</p>;
};
