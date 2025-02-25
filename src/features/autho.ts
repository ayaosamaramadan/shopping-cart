import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from 'jwt-decode'
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
  registerStatus: string;
  registerError: string;
  loginStatus: string;
  loginError: string;
  userLoaded: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values: RegisterValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      console.log("API Response:", response.data); // Log the API response
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
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user: any = jwtDecode(action.payload.token); // استخدم الاستيراد المسمى الصحيح
        return {
          ...state,
          token: action.payload.token,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload as string,
      };
    });
  },
});

export default authSlice.reducer;
