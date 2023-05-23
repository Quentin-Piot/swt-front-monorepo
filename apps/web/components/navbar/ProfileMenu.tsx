import { FiChevronDown } from "react-icons/fi";

import { getCallbackUrl } from "@/api/users";
import { useAuth } from "@/hooks/UseAuth";
import { client } from "@/services/client";
import {
    Avatar,
    Box,
    HStack,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

const ProfileMenu = () => {
    const { isConnected, clearToken, logout } = useAuth();

    const handleLogin = () => {
        clearToken();
        getCallbackUrl(client)
            .then((authorizationUrl) => {
                return window.open(authorizationUrl);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleLogout = () => {
        console.log("logout");
        return logout();
    };

    const [bgColor, borderColor] = useColorModeValue(
        ["white", "gray.200"],
        ["gray.900", "gray.700"]
    );
    return (
        <Menu>
            <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
            >
                <HStack>
                    {isConnected ? (
                        <>
                            <Avatar
                                size={"sm"}
                                src={
                                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                }
                            />
                            <VStack
                                display={{ base: "none", md: "flex" }}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2"
                            >
                                <Text fontSize="sm">Quentin Piot</Text>
                                <Text fontSize="xs" color="gray.600">
                                    Admin
                                </Text>
                            </VStack>
                        </>
                    ) : (
                        <>
                            <Avatar size={"sm"} bg="teal.500" />
                            <VStack
                                display={{ base: "none", md: "flex" }}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2"
                            >
                                <Text fontSize="sm">Guest user</Text>
                                <Text fontSize="xs" color="gray.600">
                                    Not connected
                                </Text>
                            </VStack>
                        </>
                    )}

                    <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                    </Box>
                </HStack>
            </MenuButton>
            {isConnected ? (
                <MenuList bg={bgColor} borderColor={borderColor} zIndex={1000}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Billing</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                </MenuList>
            ) : (
                <MenuList bg={bgColor} borderColor={borderColor} zIndex={1000}>
                    <MenuItem onClick={handleLogin}>Login</MenuItem>
                </MenuList>
            )}
        </Menu>
    );
};

export default ProfileMenu;
