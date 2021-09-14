import { uuid } from "uuidv4";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          Place: action.Data.Place,
          Description: action.Data.Description,
          Address: action.Data.Address,
          id: uuid(),
          userID: "u1",
        },
      ];

    default:
      return state;
  }
};
