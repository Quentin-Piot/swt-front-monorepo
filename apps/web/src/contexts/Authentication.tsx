import { createContext, useEffect, useMemo, useState } from "react";
import { PropsWithChildren } from "@/common/types/standard-props";
import { User } from "@/common/models/user";
import { getUser } from "@/api/users";
import { getTeams } from "@/api/teams";
import { client } from "@/services/client";

type AuthContext = {
    user: User | null;
    login: (data: User) => void;
    fetchUser: () => void;
    logout: () => void;
    updateToken: (token: string) => void;
    clearToken: () => void;
    isConnected: boolean;
};
export const AuthContext = createContext<AuthContext>({
    user: null,
    isConnected: false,
    login: () => null,
    logout: () => null,
    updateToken: () => null,
    fetchUser: () => null,
    clearToken: () => null,
});

type AuthProviderProps = PropsWithChildren;
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const value = useMemo<AuthContext>(() => {
        const login = async (data: User) => {
            setUser(data);
        };

        const logout = () => {
            setUser(null);
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
                    getTeams(client).then((teams) => {
                        let selectedTeamId = teams[0].id;
                        const selectedTeamInStorage = localStorage.getItem(
                            "swt-selected-team-id"
                        );

                        if (selectedTeamInStorage) {
                            selectedTeamId = parseInt(selectedTeamInStorage);
                        }

                        setUser({
                            ...user,
                            teams: teams,
                            selectedTeamId,
                        });
                    });
                });
        };

        const clearToken = () => {
            localStorage.removeItem("swt-user-token");
        };

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

    useEffect(() => {
        const token = localStorage.getItem("swt-user-token");
        if (token && !value.user) {
            value.updateToken(token);
            value.fetchUser();
        }
    }, [value]);
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
