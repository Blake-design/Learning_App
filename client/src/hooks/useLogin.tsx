import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { LoginFormType } from "../types/types";

const useLogin = () => {
  const [login, { error }] = useMutation(LOGIN_USER, {
    refetchQueries: [
      { query: QUERY_ME }, // DocumentNode object parsed with gql
      "Me", // Query name
    ],
  });

  const handleLogin = async (formState: LoginFormType) => {
    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
      window.location.assign("/");
    } catch (err) {
      console.log(err);
    }
  };

  return [handleLogin, { error }] as const;
};
export default useLogin;
