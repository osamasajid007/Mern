import { uuid } from "uuidv4";
export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return [
        ...state,
        { Email: action.userCred.email, id: "u1", UserID: uuid() },
      ];

    default:
      return state;
  }
};
export const RegistrationReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return [
        ...state,
        {
          Username: action.userCred.username,
          Email: action.userCred.email,
          UserID: uuid(),
          id: "u1",
          Image: action.userCred.Image,

          Places: action.userCred.Places,
        },
      ];

    default:
      return state;
  }
};
