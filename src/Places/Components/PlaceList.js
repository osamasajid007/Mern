import React from "react";
import Button from "../../Shared/components/Button/Button";
import Card from "../../Shared/components/UIelements/Card/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  const { items } = props;
  console.log(items);

  const places = items.map((place) => {
    return (
      <PlaceItem
        key={place.id}
        id={place.id}
        title={place.Place}
        description={place.Description}
        address={place.Address}
        createdId={place.userID}
      />
    );
  });
  return (
    <div>
      {items.length <= 0 ? (
        <div className="place-list center">
          <Card>
            <h2>No Place found, Maybe Create one? </h2>
            <Button>Share Place</Button>
          </Card>
        </div>
      ) : (
        <ul className="place-list">{places}</ul>
      )}
    </div>
  );
};

export default PlaceList;
