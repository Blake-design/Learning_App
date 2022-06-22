import React, { createContext, useState, useReducer, useContext } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

interface SignInForm {
  email: string;
  password: string;
}

interface UserCTX {
  user: {};
  handleSignIn?: (formState: SignInForm) => void;
}

const UserContext = createContext<UserCTX>({
  user: {},
});

const GetUserContext = () => {
  const { user, handleSignIn } = useContext(UserContext);
  return { user, handleSignIn };
};

const useLogin = () => {
  const [user, setUser] = useState({});
  const [login] = useMutation(LOGIN_USER);

  const handleSignIn = async (formState: SignInForm) => {
    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
      setUser(data.login);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, handleSignIn };
};

const UserProvider = ({ children }: any) => {
  const login = useLogin();
  return <UserContext.Provider value={login}>{children}</UserContext.Provider>;
};

export { useLogin, UserProvider, UserContext, GetUserContext };
