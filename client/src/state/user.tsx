import React, {
  createContext,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

interface SignInForm {
  email: string;
  password: string;
}

interface UserCTX {
  user: object;
  handleSignIn?: (formState: SignInForm) => void;
  handleLogout?: () => void;
}

const UserContext = createContext<UserCTX>({
  user: {},
});

const GetUserContext = () => {
  const { user, handleSignIn, handleLogout } = useContext(UserContext);
  return { user, handleSignIn, handleLogout };
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
  useEffect(() => {}, []);
  const handleLogout = () => {
    Auth.logout();
    setUser({});
  };

  return { user, handleSignIn, handleLogout };
};

const UserProvider = ({ children }: any) => {
  const login = useLogin();
  return <UserContext.Provider value={login}>{children}</UserContext.Provider>;
};

export { useLogin, UserProvider, UserContext, GetUserContext };
