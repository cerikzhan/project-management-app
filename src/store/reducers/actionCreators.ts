import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllBoards, fetchBoard } from './../../api/board.api';
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

export const getAllBoards = createAsyncThunk('boards/fetchAllBoards', fetchAllBoards);

export const getBoard = createAsyncThunk('boards/fetchBoard', fetchBoard);
