import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface EmployeesState {
  employees: Employee[];
  selectedEmployee: Employee | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: EmployeesState = {
  employees: [],
  selectedEmployee: null,
  status: 'idle',
};

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return result.data;
});

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    selectEmployee: (state, action) => {
      const selected = state.employees.find(emp => emp.id === action.payload);
      state.selectedEmployee = selected || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'idle';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


export const selectAllEmployees = (state: RootState): Employee[] => state.employees.employees;
export const selectEmployeeById = (state: RootState, employeeId: number): Employee | undefined =>
  state.employees.employees.find(emp => emp.id === employeeId);
export const selectSelectedEmployee = (state: RootState): Employee | null => state.employees.selectedEmployee;

export const { selectEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
