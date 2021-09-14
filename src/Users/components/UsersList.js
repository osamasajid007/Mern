import React from "react";
import Useritem from "./Useritem";
import "../components/UsersList.css";
import Card from "../../Shared/components/UIelements/Card/Card";

const UsersList = (props) => {
  console.log(props.items);
  const useritems = props.items.map((user) => (
    <Useritem
      key={user.UserID}
      id={user.id}
      image={user.Image}
      name={user.Username}
      placeCount={user.Places}
    />
  ));
  return (
    <>
      {props.items.length <= 0 ? (
        <div className="center">
          <Card>
            <h2>"No Users found"</h2>
          </Card>
        </div>
      ) : (
        <ul className="users-list">{useritems}</ul>
      )}
    </>
  );
};

export default UsersList;
