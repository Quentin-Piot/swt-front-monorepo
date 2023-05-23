import React, { PropsWithChildren } from "react";

import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

export const ProtectedLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <main>
            <Box w="100vw" h="100vh">
                <Navbar>{children}</Navbar>
            </Box>
        </main>
    );
};
