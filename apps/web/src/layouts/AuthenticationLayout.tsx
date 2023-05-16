import { Outlet } from "react-router";

export const AuthenticationLayout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};
