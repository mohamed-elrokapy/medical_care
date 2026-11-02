import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * DEMO ONLY. Requests are kept in this browser tab's memory (Redux) and are
 * discarded on reload. Nothing is sent to a server, emailed, or persisted.
 */
export interface AppointmentRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  createdAt: string;
}

interface AppointmentState {
  requests: AppointmentRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentState = {
  requests: [],
  loading: false,
  error: null,
};

export const submitDemoRequest = createAsyncThunk(
  'appointments/submitDemo',
  async (data: Omit<AppointmentRequest, 'id' | 'createdAt'>) => {
    // Short pause so the loading state is visible. No network call happens.
    await new Promise((resolve) => setTimeout(resolve, 600));
    const request: AppointmentRequest = {
      ...data,
      id: `demo-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    return request;
  }
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitDemoRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitDemoRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.requests.push(action.payload);
      })
      .addCase(submitDemoRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

export const { clearError } = appointmentSlice.actions;
export default appointmentSlice.reducer;
