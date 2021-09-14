import React, { useContext } from "react";
import { USERS } from "../../UserData/Users";
import UsersList from "../components/UsersList";
import { SignupContext } from "../UserAuth/AuthReducer/Reducer_register_Provider";
const Users = () => {
  const { RegisterUsers } = useContext(SignupContext);
  console.log(RegisterUsers);
  console.log(USERS);
  return (
    <div>
      <UsersList items={RegisterUsers} />
    </div>
  );
};

export default Users;
