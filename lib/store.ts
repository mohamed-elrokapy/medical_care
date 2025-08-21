import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './features/appointmentSlice';
import uiReducer from './features/uiSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;