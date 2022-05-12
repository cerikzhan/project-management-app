import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import boardsReducer from './reducers/boardsSlice';
import userReducer from './reducers/userSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer,
  },
  middleware: () => customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
