import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogin, fetchChangeUser, fetchDeleteUser } from '../../api/auth.api';
import { getSingleBoard, getAllBoards } from '../../api/board.api';

export const login = createAsyncThunk('user/login', fetchLogin);

export const changeUser = createAsyncThunk('user/change', fetchChangeUser);

export const deleteUser = createAsyncThunk('user/delete', fetchDeleteUser);

export const fetchAllBoards = createAsyncThunk('boards/fetchAllBoards', getAllBoards);

export const fetchSingleBoard = createAsyncThunk('boards/fetchSingleBoard', getSingleBoard);
