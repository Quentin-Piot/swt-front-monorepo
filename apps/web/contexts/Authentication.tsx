import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { getTrips } from "@/api/trips";
import { getUser } from "@/api/users";
import { User } from "@/common/models/user";
import { client } from "@/services/client";

type AuthContext = {
    user?: User;
    login: (data: User) => void;
    fetchUser: () => void;
    logout: () => void;
    updateToken: (token: string) => void;
    clearToken: () => void;
    isConnected: boolean;
};
export const AuthContext = createContext<AuthContext>({
    user: undefined,
    isConnected: false,
    login: () => null,
    logout: () => null,
    updateToken: () => null,
    fetchUser: () => null,
    clearToken: () => null,
});

type AuthProviderProps = PropsWithChildren;
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>();
    const value = useMemo<AuthContext>(() => {
        const login = async (data: User) => {
            setUser(data);
        };

        const logout = () => {
            setUser(undefined);
            clearToken();
        };

        const updateToken = (token: string) => {
            localStorage.setItem("swt-user-token", token);
        };

        const fetchUser = () => {
            getUser(client)
                .then((user) => {
                    setUser(user);
                    return user;
                })
                .then((user) => {
                    getTrips(client).then((trips) => {
                        let selectedTripId =
                            trips.length > 0 ? trips[0].id : undefined;
                        const selectedTripInStorage = localStorage.getItem(
                            "swt-selected-trip-id"
                        );

                        if (selectedTripInStorage) {
                            selectedTripId = parseInt(selectedTripInStorage);
                        }

                        setUser({
                            ...user,
                            trips: trips,
                            selectedTripId,
                        });
                    });
                });
        };

        const clearToken = () => {
            localStorage.removeItem("swt-user-token");
        };
        const token =
            typeof window !== "undefined" + "" &&
            localStorage.getItem("swt-user-token");
        if (token && !user) {
            updateToken(token);
            fetchUser();
        }
        return {
            user,
            login,
            logout,
            fetchUser,
            updateToken,
            clearToken,
            isConnected: !!user,
        };
    }, [user]);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
