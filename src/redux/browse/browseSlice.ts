import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

// Fetching genres using createAsyncThunk
export const fetchGenres = createAsyncThunk("browse/fetchGenres", async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_URI}/genre`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

// Define a type for the slice state
export interface BrowseState {
  value: Record<string, string>[];
}

// Define the initial state using that type
const initialState: BrowseState = {
  value: [],
};

// Create Slice using createSlice
export const browseSlice = createSlice({
  name: "browse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const selectGenres = (state: RootState) => state.browse.value;
export default browseSlice.reducer;
