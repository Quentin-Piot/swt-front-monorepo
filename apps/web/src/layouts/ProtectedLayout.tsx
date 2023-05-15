import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export const ProtectedLayout = () => {
    return (
        <main>
            <Box w="100vw" h="100vh">
                <Navbar>
                    <Outlet />
                </Navbar>
            </Box>
        </main>
    );
};
