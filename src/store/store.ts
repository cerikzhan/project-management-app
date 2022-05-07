import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import boardsReducer from './reducers/boardsSlice';
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
  middleware: () => customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
