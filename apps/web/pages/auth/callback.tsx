import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "@/hooks/UseAuth";
import { CircularProgress, Flex } from "@chakra-ui/react";

type UrlParams = {
    token?: string;
    error?: string;
};
export default function LoginPage() {
    const router = useRouter();
    const { token, error }: UrlParams = router.query;

    const { updateToken, fetchUser } = useAuth();

    useEffect(() => {
        if (token) {
            updateToken(token);
            fetchUser();
            router.push("/");
        }
    }, [fetchUser, router, token, updateToken]);

    if (error) return <>{error}</>;

    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w="100vw"
            h="100vh"
        >
            <CircularProgress isIndeterminate />
        </Flex>
    );
}
