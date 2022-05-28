import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllBoards, deleteBoard, filterBoards } from './actionCreators';
import { Board } from '../../types/Entities/Board';

interface StateTypeBoard {
  boards: Board[];
  searchText: string;
  loading: boolean;
  error: { message: string; code: string } | null;
}

const initialState: StateTypeBoard = {
  boards: [] as Board[],
  searchText: '',
  loading: false,
  error: null,
};

export const boardsSlice = createSlice({
  name: 'boardsSLice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllBoards.pending.type]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [fetchAllBoards.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<Board[]>) => {
      state.loading = false;
      state.boards = action.payload;
    },
    [fetchAllBoards.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.boards = [];
    },
    [deleteBoard.pending.type]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [deleteBoard.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<Board[]>) => {
      state.loading = false;
      state.boards = action.payload;
    },
    [deleteBoard.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [filterBoards.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export default boardsSlice.reducer;
