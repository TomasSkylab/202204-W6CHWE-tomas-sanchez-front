import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (user, action) => ({ ...action.payload }),
  },
});

export const { login: loginUserActionCreator } = userSlice.actions;
export default userSlice;
