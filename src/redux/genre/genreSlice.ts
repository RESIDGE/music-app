import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

// Fetching genres using createAsyncThunk
export const fetchArtistsByGenreID = createAsyncThunk(
  "genre/fetchArtistsByGenreID",
  async (genreId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/genre/${genreId}/artists`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Define a type for the slice state
export interface GenreState {
  value: Record<string, string>[];
}

// Define the initial state using that type
const initialState: GenreState = {
  value: [],
};

// Create Slice using createSlice
export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtistsByGenreID.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const selectGenreArtists = (state: RootState) => state.genre.value;
export default genreSlice.reducer;
