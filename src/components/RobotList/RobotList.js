import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";

const RobotList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <ul className="robot-list">
      {robots.map((robot) => (
        <li className="robot" key={robot._id}>
          <Robot robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotList;
