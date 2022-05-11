import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllBoards, fetchBoard } from '../../api/board.api';
import { Board, BoardItem } from '../../types/Entities/Board';

interface StateTypeBoard {
  boards: Board[];
  loading: boolean;
  search: string;
  error: boolean;
  lang: string;
}

const initialState: StateTypeBoard = {
  boards: [] as Board[],
  loading: true,
  search: 'testboard',
  error: false,
  lang: 'ru',
};

export const boardSlice = createSlice({
  name: 'boardSLice',
  initialState,
  reducers: {
    setSearchWord: (state: StateTypeBoard, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLang: (state: StateTypeBoard, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
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
  },
});

export default boardSlice.reducer;
