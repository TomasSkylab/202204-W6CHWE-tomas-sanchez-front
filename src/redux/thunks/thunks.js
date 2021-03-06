import axios from "axios";
import { loadRobotActionCreator } from "../features/robotsSlice";

export const loadRobotDataThunk = () => async (dispatch) => {
  const robots = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadRobotActionCreator(robots.data.robots));
};
