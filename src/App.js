import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotList from "./components/RobotList/RobotList";
import { loadRobotDataThunk } from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotDataThunk());
  }, [dispatch]);
  return (
    <>
      <RobotList />
    </>
  );
}

export default App;
