import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotList from "./components/RobotList/RobotList";
import { loadRobotDataThunk } from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotDataThunk());
  }, [dispatch]);
  return (
    <>
      <LoginForm />
      <RobotList />
    </>
  );
}

export default App;
