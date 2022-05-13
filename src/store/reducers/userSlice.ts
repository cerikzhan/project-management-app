import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, changeUser, deleteUser } from './actionCreators';
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
    logoutUser: (state: StateTypeUser) => {
      localStorage.removeItem('access_token');
      state.user = {} as User;
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
    [changeUser.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [changeUser.fulfilled.type]: (state: StateTypeUser, action: PayloadAction<User>) => {
      state.loading = false;
      state.user.login = action.payload.login;
      state.user.name = action.payload.name;
    },
    [changeUser.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = {} as User;
    },
    [deleteUser.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [deleteUser.fulfilled.type]: (state: StateTypeUser) => {
      state.loading = false;
      state.user = {} as User;
      localStorage.removeItem('access_token');
      console.log('delete ska');
    },
    [deleteUser.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = {} as User;
    },
  },
});

export default userSlice.reducer;
