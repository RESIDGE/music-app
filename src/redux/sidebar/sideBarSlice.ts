import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
export interface SideBarState {
  value: string;
}

// Define the initial state using that type
const initialState: SideBarState = {
  value: "home",
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    browse: (state) => {
      state.value = "browse";
    },
    home: (state) => {
      state.value = "home";
    },
    trending: (state) => {
      state.value = "trending";
    },
  },
});

export const { browse, home, trending } = sideBarSlice.actions;
export const selectSideBarLink = (state: RootState) => state.sideBar.value;
export default sideBarSlice.reducer;
