import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteBoard } from '../../api/board.api';
import { getAllBoards, getBoard } from '../reducers/actionCreators';
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
    [getAllBoards.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllBoards.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<Board[]>) => {
      state.loading = false;
      state.boards = action.payload;
    },
    [getAllBoards.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.boards = [];
    },
    [getBoard.pending.type]: (state) => {
      state.loading = true;
    },
    [getBoard.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<BoardItem>) => {
      state.loading = false;
      state.boards = [];
      state.boards.push(action.payload);
    },
    [getBoard.rejected.type]: (state, action) => {
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
