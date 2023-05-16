import {
    Flex,
    FlexProps,
    HStack,
    IconButton,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiBell, FiMenu } from "react-icons/fi";
import ProfileMenu from "@/components/navbar/ProfileMenu";

type MobileProps = FlexProps & {
    onOpen: () => void;
};
const MobileNavbar = ({ onOpen, ...rest }: MobileProps) => {
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
