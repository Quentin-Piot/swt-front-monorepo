import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "@/contexts/UseAuth";

export const ProtectedLayout = () => {
  const {fetchUser, user} = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const token = sessionStorage.getItem("swt-user-token");
    if (token && !user) {
      return fetchUser();
    }
    if (!user)
      navigate("/auth/login");
  }, [fetchUser, navigate, user]);


  return (
      <main>
        <Outlet/>
      </main>
  );
};
