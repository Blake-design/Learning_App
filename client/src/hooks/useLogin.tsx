import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { LoginFormType } from "../types";

const useLogin = () => {
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleLogin = async (formState: LoginFormType) => {
    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }
  };

  return [handleLogin, { error }] as const;
};
export default useLogin;
