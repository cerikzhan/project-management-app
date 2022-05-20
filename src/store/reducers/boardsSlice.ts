import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllBoards, deleteBoard } from './actionCreators';
import { Board } from '../../types/Entities/Board';

interface StateTypeBoard {
  boards: Board[];
  loading: boolean;
  error: boolean;
}

const initialState: StateTypeBoard = {
  boards: [] as Board[],
  loading: false,
  error: false,
};

export const boardsSlice = createSlice({
  name: 'boardsSLice',
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

export default boardsSlice.reducer;
