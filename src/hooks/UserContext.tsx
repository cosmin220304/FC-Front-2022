import React, { ReactNode, useEffect, useReducer, useState } from "react";

interface IUser {
  name: string;
}

type SetAction = {
  type: "set";
  payload: IUser;
};

type UserAction = SetAction;

interface UserState {
  user?: IUser;
}

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "set": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      throw new Error("invalid action");
    }
  }
};

interface IUserContext {
  userState: UserState;
  dispatch: React.Dispatch<UserAction>;
}

const UserContext = React.createContext<IUserContext>({
  dispatch: () => {},
  userState: {},
});

const UserContextWrapper = ({ children }: { children: ReactNode }) => {
  const [userState, dispatch] = useReducer(userReducer, {});

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({
        type: "set",
        payload: JSON.parse(user),
      });
    }
  }, []);

  useEffect(() => {
    if (userState.user) {
      localStorage.setItem("user", JSON.stringify(userState.user));
    }
  }, [userState.user]);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextWrapper, UserContext };
