import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./slices/SideBarSlice";

const AppStore = configureStore({
  reducer: {
    sidebar: SideBarReducer,
  },
});

export default AppStore;
