import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { PageWrapper } from '../../components/PageWrapper';
import { pokeControl } from '../../services';
import { ListItem } from './components/ListItem';
import { fetchList } from './listSlice';

export const List: React.FC = () => {
  const { list, isFetching, error } = useSelector(
    (state: RootState) => state.list
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const renderList = useMemo(() => {
    if (list.length) {
      return list.map((item) => <ListItem item={item} key={item.id} />);
    }
    return null;
  }, [list]);

  return (
    <PageWrapper isFetching={isFetching} error={error}>
      {renderList}
    </PageWrapper>
  );
};
