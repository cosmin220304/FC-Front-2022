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
  const [user, setUser] = useState<IUser>();
  const [userState, dispatch] = useReducer(userReducer, { user });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextWrapper, UserContext };
