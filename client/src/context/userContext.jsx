import { useEffect, useReducer,createContext } from "react";
// import { login } from "../../services/authService";
// import { getUserbyEmail } from "../../services/userService";
// import { getUserStorage } from "../../services/userStorage";
import { ADD_USER, userReducer } from "../reducers/userReducer";

const UserContext = createContext();

const initialState = {
  id: "",
  username: "",
  email: "",
  avatar: "",
  places: [],
  likes: [],
  comments: [],
};

export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  // useEffect(() => {
  //   (async () => {
  //     const user = await getUserStorage();
  //     if (user) {
  //       const loggedUser = await getUserbyEmail({ email: user });

  //       userDispatch({ type: ADD_USER, payload: loggedUser[0] });
  //     }
  //   })();
  // }, []);

  const values = {
    userState,
    userDispatch,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
