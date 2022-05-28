import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getSingleBoard,
  getAllBoards,
  removeBoard,
  createNewBoard,
  createNewColumn,
} from '../../api/board.api';
import { changeTaskColumn, createNewTask } from '../../api/task.api';
import { removeColumn, changeColumn } from '../../api/column.api';
import { removeTask } from '../../api/task.api';
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

export const updateColumn = createAsyncThunk('boards/updateColumn', changeColumn);

export const deleteColumn = createAsyncThunk('boards/deleteColumn', removeColumn);

export const updateTaskColumn = createAsyncThunk('tasks/updateTask', changeTaskColumn);

export const deleteTask = createAsyncThunk('boards/deleteTask', removeTask);

export const addNewBoard = createAsyncThunk('boards/createNewBoard', createNewBoard);

export const addNewColumns = createAsyncThunk('boards/createNewColumn', createNewColumn);

export const addNewTask = createAsyncThunk('boards/createNewTask', createNewTask);

export const filterBoards = createAsyncThunk('boards/filterBoards', (value: string) => {
  return Promise.resolve(value);
});
