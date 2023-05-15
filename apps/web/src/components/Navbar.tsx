import { ReactNode } from "react";
import {
    Box,
    Drawer,
    DrawerContent,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "@/components/navbar/Sidebar";
import MobileNavbar from "@/components/navbar/MobileNavbar";

type NavbarProps = {
    children: ReactNode;
};
const Navbar = ({ children }: NavbarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Sidebar
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNavbar onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} h="calc(100vh - 80px)">
                {children}
            </Box>
        </Box>
    );
};

export default Navbar;
