import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

interface AppointmentState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
  currentAppointment: Appointment | null;
}

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
  currentAppointment: null,
};

// Async thunk for booking appointment
export const bookAppointment = createAsyncThunk(
  'appointments/book',
  async (appointmentData: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Simulate sending email notification
    console.log('Email sent to admin:', newAppointment);
    
    return newAppointment;
  }
);

// Async thunk for confirming appointment
export const confirmAppointment = createAsyncThunk(
  'appointments/confirm',
  async (appointmentId: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return appointmentId;
  }
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurrentAppointment: (state, action: PayloadAction<Appointment | null>) => {
      state.currentAppointment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments.push(action.payload);
        state.currentAppointment = action.payload;
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to book appointment';
      })
      .addCase(confirmAppointment.fulfilled, (state, action) => {
        const appointment = state.appointments.find(apt => apt.id === action.payload);
        if (appointment) {
          appointment.status = 'confirmed';
        }
      });
  },
});

export const { clearError, setCurrentAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;