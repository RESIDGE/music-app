import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Fetching artist's albums
export const fetchArtistAlbums = createAsyncThunk(
  "artist/fetchArtistAlbums",
  async (artistId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/artist/${artistId}/albums`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Fetching artist
export const fetchArtist = createAsyncThunk(
  "artist/fetchArtist",
  async (artistId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/artist/${artistId}`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Fetching artist's playlists
export const fetchArtistPlaylists = createAsyncThunk(
  "artist/fetchArtistPlaylists",
  async (artistId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/artist/${artistId}/playlists`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Fetching artist radio
export const fetchArtistRadio = createAsyncThunk(
  "artist/fetchArtistRadio",
  async (artistId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/artist/${artistId}/radio`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Fetching related artists
export const fetchArtistRelated = createAsyncThunk(
  "artist/fetchArtistRelated",
  async (artistId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/artist/${artistId}/related`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Fetching artist's top 5 tracks
export const fetchArtistTop = createAsyncThunk(
  "artist/fetchArtistTop",
  async (artistId: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URI}/artist/${artistId}/top`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Track Types
interface Track {
  album: Record<string, string>;
  id: number;
  title: string;
}

// Define a type for the slice state
export interface ArtistState {
  albums: Record<string, string>[];
  artist: Record<string, string>;
  playlists: Record<string, string>[];
  radio: Record<string, string>[];
  related: Record<string, string>[];
  topTracks: Track[];
}

// Define the initial state using that type
const initialState: ArtistState = {
  albums: [],
  artist: {},
  playlists: [],
  radio: [],
  related: [],
  topTracks: [],
};

// Create slice using createSlice
export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistAlbums.fulfilled, (state, action) => {
        state.albums = action.payload;
      })
      .addCase(fetchArtist.fulfilled, (state, action) => {
        state.artist = action.payload;
      })
      .addCase(fetchArtistPlaylists.fulfilled, (state, action) => {
        state.playlists = action.payload;
      })
      .addCase(fetchArtistRadio.fulfilled, (state, action) => {
        state.radio = action.payload;
      })
      .addCase(fetchArtistRelated.fulfilled, (state, action) => {
        state.related = action.payload;
      })
      .addCase(fetchArtistTop.fulfilled, (state, action) => {
        state.topTracks = action.payload;
      });
  },
});

export const selectAlbums = (state: RootState) => state.artist.albums;
export const selectArtist = (state: RootState) => state.artist.artist;
export const selectPlaylists = (state: RootState) => state.artist.playlists;
export const selectRadio = (state: RootState) => state.artist.radio;
export const selectRelated = (state: RootState) => state.artist.related;
export const selectTopTracks = (state: RootState) => state.artist.topTracks;

export default artistSlice.reducer;
