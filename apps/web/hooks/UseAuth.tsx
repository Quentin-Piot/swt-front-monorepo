import { useContext } from "react";

import { AuthContext } from "@/contexts/Authentication";

export const useAuth = () => {
    return useContext(AuthContext);
};
