const Robot = ({ robot: { name, image, stamina, speed, dateOfCreation } }) => {
  return (
    <div className="container-robot">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <ul className="container-robot__stats">
        <li>Speed: {speed}</li>
        <li>Stamina: {stamina}</li>
        <li>Creation Date: {dateOfCreation}</li>
      </ul>
    </div>
  );
};

export default Robot;
