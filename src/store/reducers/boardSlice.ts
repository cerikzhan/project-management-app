import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSingleBoard } from './actionCreators';
import { BoardItem } from '../../types/Entities/Board';

interface StateTypeBoard {
  item: BoardItem | null;
  loading: boolean;
  error: boolean;
}

const initialState: StateTypeBoard = {
  item: null,
  loading: false,
  error: false,
};

export const boardSlice = createSlice({
  name: 'boardSLice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleBoard.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchSingleBoard.fulfilled.type]: (
      state: StateTypeBoard,
      action: PayloadAction<BoardItem>
    ) => {
      state.loading = false;
      state.item = action.payload;
    },
    [fetchSingleBoard.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.item = null;
    },
  },
});

export default boardSlice.reducer;
