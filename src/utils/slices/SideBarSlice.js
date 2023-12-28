import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggelSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    sidebarclose: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { toggelSideBar, sidebarclose } = SideBarSlice.actions;
export default SideBarSlice.reducer;
