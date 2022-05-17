import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllBoards, deleteBoard } from '../reducers/actionCreators';
import { Board } from '../../types/Entities/Board';

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

export const boardsSlice = createSlice({
  name: 'boardsSLice',
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
