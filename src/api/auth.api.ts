import request from './request';
import { LoginDTO } from '../types/DTO/LoginDTO';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async (userdata: LoginDTO) => {
  const response = await request.post<string>('signin', userdata);
  return response.data;
});
