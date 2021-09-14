import React from "react";
import PlaceList from "../Components/PlaceList";
import { useParams } from "react-router";
import { useContext } from "react";
import { PlaceReducer } from "../Reducer/ReducerProvider";
const DYMMY_PLACES = [
  {
    id: "p1",
    title: "Empg labs",
    description: "Software Company",
    ImageUrl:
      "https://cdn.techjuice.pk/wp-content/uploads/2016/10/Zameen-3-1024x684.jpg",
    address:
      "Mega Tower, 63-B Main Boulevard Gulberg, Main Gulberg, Lahore, Punjab",
    location: {
      lat: 31.527797,
      lng: 4.3474218,
    },
    creator: "u1",
  },
];
const UserPlaces = () => {
  const { place_data } = useContext(PlaceReducer);
  console.log(place_data);

  const user_id = useParams().userid;
  console.log(user_id);
  const userPlaces = place_data.filter((place) => place.userID == user_id);

  return (
    <div>
      <PlaceList items={userPlaces} />
    </div>
  );
};

export default UserPlaces;
