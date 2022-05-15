import { createSlice } from "@reduxjs/toolkit";

const robotSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobot: (robots, action) => [...action.payload],
  },
});

export const { loadRobot: loadRobotActionCreator } = robotSlice.actions;
export default robotSlice.reducer;
