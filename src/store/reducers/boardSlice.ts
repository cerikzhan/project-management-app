import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSingleBoard } from './actionCreators';
import { BoardItem } from '../../types/Entities/Board';

interface StateTypeBoard {
  board: BoardItem | null;
  loading: boolean;
  error: boolean;
}

const initialState: StateTypeBoard = {
  board: null,
  loading: true,
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
      state.board = action.payload;
    },
    [fetchSingleBoard.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.board = null;
    },
  },
});

export default boardSlice.reducer;
