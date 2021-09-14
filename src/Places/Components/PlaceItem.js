import React from "react";
import Card from "../../Shared/components/UIelements/Card/Card";
import "./PlaceItem.css";
import Button from "../../Shared/components/Button/Button";
const PlaceItem = (props) => {
  console.log(props);
  const { id, image, title, description, address, createdId, coordinates } =
    props;
  return (
    <li className="place-item">
      <Card>
        <div className="place-item__image">
          <img
            src="https://miro.medium.com/max/748/0*RuY6tYMQBFoi9OVl.png"
            alt={title}
          />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
