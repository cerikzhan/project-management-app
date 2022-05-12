import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login } from '../../api/auth.api';
import { User } from '../../types/Entities/User';

interface StateTypeUser {
  user: User;
  loading: boolean;
  error: string;
  lang: string;
  search: string;
}

const initialState: StateTypeUser = {
  user: {} as User,
  loading: false,
  error: '',
  lang: 'ru',
  search: 'testboard',
};

export const userSlice = createSlice({
  name: 'userSLice',
  initialState,
  reducers: {
    setSearchWord: (state: StateTypeUser, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLang: (state: StateTypeUser, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [login.fulfilled.type]: (state: StateTypeUser, action: PayloadAction<User>) => {
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

export default userSlice.reducer;
