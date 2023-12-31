import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { User } from 'domain/entities/user';
import api from 'api';

const initialState: AuthState = {
  authorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.authorized = true;
      localStorage.setItem('uid', action.payload.uid);
    },
    logout: (state) => {
      api.auth.logout();
      state.authorized = false;
      state.user = undefined;
      localStorage.removeItem('uid');
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
