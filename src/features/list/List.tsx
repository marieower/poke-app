import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { pokeControl } from '../../services';
import { fetchList } from './listSlice';

export const List: React.FC = () => {
  const { list, isFetching } = useSelector((state: RootState) => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const renderList = useMemo(() => {
    if (isFetching) {
      return <p>.............loading...........</p>;
    }
    if (list.length) {
      return list.map((item) => <p key={item.id}>{item.name}</p>);
    }
    return null;
  }, [list, isFetching]);

  return <div>{renderList}</div>;
};
