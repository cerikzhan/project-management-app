import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllBoards, fetchBoard } from '../../api/board.api';
import { login } from '../../api/auth.api';
import { Board, BoardItem } from '../../types/Entities/Board';
import { User } from '../../types/Entities/User';

interface StateTypeBoard {
  boards: Board[];
  loading: boolean;
  search: string;
  error: boolean;
  lang: string;
  user: User;
}

const initialState: StateTypeBoard = {
  boards: [] as Board[],
  loading: true,
  search: 'testboard',
  error: false,
  lang: 'ru',
  user: {} as User,
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
    [login.pending.type]: (state) => {
      state.loading = true;
    },
    [login.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    [login.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = {} as User;
    },
  },
});

export default boardSlice.reducer;
