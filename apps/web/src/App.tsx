import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "@/pages/authentication/Login";
import { AuthenticationLayout } from "@/layouts/AuthenticationLayout";
import { ProtectedLayout } from "@/layouts/ProtectedLayout";
import HomePage from "@/pages/Home";
import { AuthProvider } from "@/contexts/Authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <ChakraProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route element={<ProtectedLayout />}>
                            <Route path="/" element={<HomePage />} />
                        </Route>
                        <Route path="/auth" element={<AuthenticationLayout />}>
                            <Route path="login" element={<LoginPage />} />
                            <Route path="callback" element={<LoginPage />} />
                        </Route>
                    </Routes>
                </QueryClientProvider>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
