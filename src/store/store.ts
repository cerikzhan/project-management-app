import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import boardReducer from './reducers/boardSlice';
import boardsReducer from './reducers/boardsSlice';
import userReducer from './reducers/userSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    board: boardReducer,
    boards: boardsReducer,
    user: userReducer,
  },
  middleware: () => customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
