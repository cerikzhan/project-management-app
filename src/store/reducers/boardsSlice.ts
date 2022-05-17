import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllBoards, fetchBoard, deleteBoard } from '../../api/board.api';
import { Board, BoardItem } from '../../types/Entities/Board';

interface StateTypeBoard {
  boards: Board[];
  loading: boolean;
  error: boolean;
}

const initialState: StateTypeBoard = {
  boards: [] as Board[],
  loading: true,
  error: false,
};

export const boardSlice = createSlice({
  name: 'boardSLice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllBoards.pending.type]: (state) => {
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
    [fetchBoard.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchBoard.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<BoardItem>) => {
      state.loading = false;
      state.boards = [];
      state.boards.push(action.payload);
    },
    [fetchBoard.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.boards = [];
    },
    [deleteBoard.pending.type]: (state) => {
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
  },
});

export default boardSlice.reducer;
