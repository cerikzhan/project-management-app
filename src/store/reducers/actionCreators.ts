import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSingleBoard, getAllBoards, removeBoard } from '../../api/board.api';
import { removeColumn, putColumn } from '../../api/column.api';
import {
  fetchLogin,
  fetchChangeUser,
  fetchDeleteUser,
  fetchUserAfterLogin,
  fetchSignUpUser,
} from '../../api/user.api';

export const login = createAsyncThunk('user/login', fetchLogin);

export const changeUser = createAsyncThunk('user/change', fetchChangeUser);

export const deleteUser = createAsyncThunk('user/delete', fetchDeleteUser);

export const authUser = createAsyncThunk('user/auth', fetchUserAfterLogin);

export const signUpUser = createAsyncThunk('user/SignUp', fetchSignUpUser);

export const fetchAllBoards = createAsyncThunk('boards/fetchAllBoards', getAllBoards);

export const fetchSingleBoard = createAsyncThunk('boards/fetchSingleBoard', getSingleBoard);

export const deleteBoard = createAsyncThunk('boards/deleteBoard', removeBoard);

export const deleteColumn = createAsyncThunk('boards/deleteBoard', removeColumn);

export const updateColumn = createAsyncThunk('boards/deleteBoard', putColumn);
