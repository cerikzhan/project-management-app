import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, changeUser, deleteUser, authUser, signUpUser } from './actionCreators';
import { User } from '../../types/Entities/User';
import { resetToken } from './../../services/userService';

interface StateTypeUser {
  user: User;
  loading: boolean;
  error: { message: string; code: string } | null;
  lang: string;
  search: string;
}

const initialState: StateTypeUser = {
  user: {} as User,
  loading: true,
  error: null,
  lang: 'en',
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
      resetToken();
      state.user = {} as User;
    },
    resetError: (state: StateTypeUser) => {
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
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
    [authUser.pending.type]: (state) => {
      state.loading = true;
    },
    [authUser.fulfilled.type]: (state: StateTypeUser, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    [authUser.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = {} as User;
    },
    [changeUser.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
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
      state.error = null;
    },
    [deleteUser.fulfilled.type]: (state: StateTypeUser) => {
      state.loading = false;
      state.user = {} as User;
      localStorage.removeItem('access_token');
    },
    [deleteUser.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = {} as User;
    },
    [signUpUser.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signUpUser.fulfilled.type]: (state: StateTypeUser, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    [signUpUser.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = {} as User;
    },
  },
});

export default userSlice.reducer;
