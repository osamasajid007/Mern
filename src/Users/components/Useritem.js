import React from "react";
import "../components/Useritem.css";
import Avatar from "../../Shared/components/UIelements/Avatar/Avatar";
import Card from "../../Shared/components/UIelements/Card/Card";
import { Link } from "react-router-dom";
const Useritem = (props) => {
  console.log(props);
  const { id, name, image, placeCount } = props;
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount == 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default Useritem;
