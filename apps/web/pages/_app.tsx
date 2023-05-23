import { AppProps } from "next/app";

import { AuthProvider } from "@/contexts/Authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </AuthProvider>
        </ChakraProvider>
    );
}
