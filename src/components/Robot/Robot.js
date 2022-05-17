import styled from "styled-components";

const Robot = ({ robot: { name, image, stamina, speed, dateOfCreation } }) => {
  const StyleRobot = styled.div`
    background-color: black;
    width: 300px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
    text-align: center;

    li {
      list-style: none;
    }
    h2 {
      list-style: none;
    }

    img {
      border: 2px solid white;
      width: 100%;
      height: 350px;
    }
  `;

  const RobotWrapped = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  return (
    <RobotWrapped>
      <StyleRobot>
        <div className="container-robot">
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <ul className="container-robot__stats">
            <li>Speed: {speed}</li>
            <li>Stamina: {stamina}</li>
            <li>Creation Date: {dateOfCreation}</li>
          </ul>
        </div>
      </StyleRobot>
    </RobotWrapped>
  );
};

export default Robot;
