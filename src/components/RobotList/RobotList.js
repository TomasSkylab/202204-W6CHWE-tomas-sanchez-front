import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import styled from "styled-components";

const RobotList = () => {
  const robots = useSelector((state) => state.robots);

  const StyleRobotList = styled.div`
    li {
      list-style: none;
    }

    ul {
      padding-left: 0px;
    }
  `;

  const TitleWeb = styled.div`
    display: flex;
    justify-content: center;
    font-size: 45px;
  `;

  return (
    <StyleRobotList>
      <TitleWeb>Robots Molones</TitleWeb>
      <ul className="robot-list">
        {robots.map((robot) => (
          <li className="robot" key={robot._id}>
            <Robot robot={robot} />
          </li>
        ))}
      </ul>
    </StyleRobotList>
  );
};

export default RobotList;
