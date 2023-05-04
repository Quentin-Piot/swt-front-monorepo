import {createContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PropsWithChildren} from "@/common/types/standard-props";
import {User} from "@/common/models/user";
import {client} from "@/App";
import {getUser} from "@/api/users";

type AuthContext = {
  user: User | null;
  login: (data: User) => void;
  fetchUser: () => void;
  logout: () => void;
  updateToken: (token: string) => void;
  clearToken: () => void;
};
export const AuthContext = createContext<AuthContext>({
  user: null,
  login: () => null,
  logout: () => null,
  updateToken: () => null,
  fetchUser: () => null,
  clearToken: () => null,
});

type AuthProviderProps = PropsWithChildren;
export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const value = useMemo<AuthContext>(() => {
    const login = async (data: User) => {
      setUser(data);
      navigate("/");
    };

    const logout = () => {
      setUser(null);
      navigate("/", {replace: true});
    };

    const updateToken = (token: string) => {
      sessionStorage.setItem("swt-user-token", token);
      client.setToken(token);
    };

    const fetchUser = () => {
      getUser(client).then((user) => {
        setUser(user);
        navigate("/", {replace: true});
      });
    };

    const clearToken = () => {
      sessionStorage.removeItem("swt-user-token");
    }
    return {
      user,
      login,
      logout,
      fetchUser,
      updateToken,
      clearToken,
    };
  }, [navigate, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
