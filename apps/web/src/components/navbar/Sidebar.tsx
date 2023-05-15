import {
    Box,
    BoxProps,
    CloseButton,
    Flex,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "@/components/navbar/NavItem";
import { IconType } from "react-icons";
import {
    FiCompass,
    FiHome,
    FiSettings,
    FiStar,
    FiTrendingUp,
} from "react-icons/fi";

type SidebarProps = {
    onClose: () => void;
} & BoxProps;
type LinkItemProps = {
    name: string;
    icon: IconType;
};
const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome },
    { name: "Trending", icon: FiTrendingUp },
    { name: "Explore", icon: FiCompass },
    { name: "Favourites", icon: FiStar },
    { name: "Settings", icon: FiSettings },
];

const Sidebar = ({ onClose, ...props }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...props}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    QQ & Juju
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default Sidebar;
