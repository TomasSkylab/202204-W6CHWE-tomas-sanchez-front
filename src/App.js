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
    <div className="App">
      {" "}
      <h1>Robots Web in process...</h1>
      <RobotList />
    </div>
  );
}

export default App;
