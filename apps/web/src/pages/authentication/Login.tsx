import {getCallbackUrl} from "@/api/users";
import {Button} from "@chakra-ui/react";
import {client} from "@/App";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "@/contexts/UseAuth";

export default function LoginPage() {
    const [searchParams] = useSearchParams();
    const tokenParam = searchParams.get("token");
    const errorParam = searchParams.get("error");

    const {updateToken, fetchUser, clearToken} = useAuth();

    const handleLogin = () => {
        clearToken()
        getCallbackUrl(client).then((authorizationUrl) => {
            return window.open(authorizationUrl);
        }).catch((error) => {
            console.log(error)
        });
    };

    useEffect(() => {
        if (tokenParam) {
            updateToken(tokenParam)
            fetchUser()
        }
    }, [fetchUser, tokenParam, updateToken]);


    if (errorParam) return (<>Error: {errorParam}<br/><Button colorScheme="red" onClick={handleLogin}>
        Retry
    </Button></>)


    return (
        <>
            <Button colorScheme="red" onClick={handleLogin}>
                Login
            </Button>
        </>
    );
}
