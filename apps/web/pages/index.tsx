import dynamic from "next/dynamic";
import Head from "next/head";

import { ProtectedLayout } from "@/layouts/ProtectedLayout";
import { Box } from "@chakra-ui/react";

export const LazyMap = dynamic(() => import("../containers/Map"), {
    ssr: false,
});
export default function HomePage() {
    return (
        <>
            <Head>
                <title>QQ & JUJU - Social World Tour - Quentin Piot</title>
                <meta
                    name="description"
                    content="The world tour website of QQ && JUJU. Explore the world with us. Quentin Piot - Juliette Cattin"
                    key="desc"
                />
            </Head>
            <ProtectedLayout>
                <Box w="100%" h="100%">
                    <LazyMap />
                </Box>
            </ProtectedLayout>
        </>
    );
}
