import {
    Avatar,
    Flex,
    FlexProps,
    HStack,
    IconButton,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiBell, FiMenu } from "react-icons/fi";
import { useAuth } from "@/hooks/UseAuth";
import { getCallbackUrl } from "@/api/users";
import { client } from "@/App";
import { useMemo } from "react";
import ProfileMenu from "@/components/navbar/ProfileMenu";

type MobileProps = FlexProps & {
    onOpen: () => void;
};
const MobileNavbar = ({ onOpen, ...rest }: MobileProps) => {
    const { isConnected, clearToken } = useAuth();
    const { colorMode } = useColorMode();

    const UserAvater = useMemo(
        () =>
            isConnected ? (
                <Avatar
                    size={"sm"}
                    src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                />
            ) : (
                <Avatar size={"sm"} bg="teal.500" />
            ),
        [isConnected]
    );
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

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
                QQ & Juju
            </Text>

            <HStack spacing={{ base: "0", md: "6" }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                />
                <Flex alignItems={"center"}>
                    <ProfileMenu />
                </Flex>
            </HStack>
        </Flex>
    );
};

export default MobileNavbar;
