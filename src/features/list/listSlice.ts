import { PokeControl } from './../../services/PokeControl';
import { AppThunk } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IntroPokemon } from '../../types/IntroPokemon';
import { pokeControl } from '../../services';

interface ListState {
  list: IntroPokemon[];
  isFetching: boolean;
  error: null | string;
}

const initialState: ListState = {
  list: [],
  isFetching: false,
  error: null,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    fetchListStart: (state) => {
      state.list = [];
      state.isFetching = true;
      state.error = null;
    },
    fetchListSuccess: (state, action: PayloadAction<IntroPokemon[]>) => {
      state.list = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    fetchListError: (state, action: PayloadAction<string>) => {
      state.list = [];
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchListStart,
  fetchListSuccess,
  fetchListError,
} = listSlice.actions;

export const fetchList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchListStart());
    const result = await pokeControl.getAll();

    dispatch(fetchListSuccess(result));
  } catch (error) {
    dispatch(fetchListError(error.message));
  }
};

export const listReducer = listSlice.reducer;
