import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchLogin,
  fetchChangeUser,
  fetchDeleteUser,
  fetchUserAfterLogin,
} from '../../api/user.api';

export const login = createAsyncThunk('user/login', fetchLogin);

export const changeUser = createAsyncThunk('user/change', fetchChangeUser);

export const deleteUser = createAsyncThunk('user/delete', fetchDeleteUser);

export const authUser = createAsyncThunk('user/auth', fetchUserAfterLogin);
