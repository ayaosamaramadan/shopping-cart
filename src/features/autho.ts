import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  token: string | null;
  name: string;
  email: string;
  _id: string;
  registerstatus: string;
  registererror: string;
  loginstatus: string;
  loginerror: string;
  userloading: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerstatus: "",
  registererror: "",
  loginstatus: "",
  loginerror: "",
  userloading: false,
};

export const registeruser = createAsyncThunk(
  "auth/registeruser",
  async (values: RegisterValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registeruser.pending, (state) => {
      state.userloading = true;
    });
    builder.addCase(registeruser.fulfilled, (state, action) => {
      state.userloading = false;
      state.registerstatus = "success";
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state._id = action.payload._id;
    });
    builder.addCase(registeruser.rejected, (state, action) => {
      state.userloading = false;
      state.registerstatus = "failed";
      state.registererror = action.payload as string;
    });
  },
});

export default authSlice.reducer;
