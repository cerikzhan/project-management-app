import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllBoards, fetchBoard } from './../reducers/actionCreators';

interface StateTypeBoard {
  boards: TypeBoard[];
  loading: boolean;
  search: string;
  error: boolean;
}

interface TypeBoard {
  id: number;
  name: string;
}

const initialState: StateTypeBoard = {
  boards: [] as TypeBoard[],
  loading: true,
  search: 'testboard',
  error: false,
};

export const boardSLice = createSlice({
  name: 'boardSLice',
  initialState,
  reducers: {
    setSearchWord: (state: StateTypeBoard, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [fetchAllBoards.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchAllBoards.fulfilled.type]: (
      state: StateTypeBoard,
      action: PayloadAction<TypeBoard[]>
    ) => {
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
    [fetchBoard.fulfilled.type]: (state: StateTypeBoard, action: PayloadAction<TypeBoard>) => {
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

export const { setSearchWord } = boardSLice.actions;

export default boardSLice.reducer;
