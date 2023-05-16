import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Head from "next/head";

export default function LandingPage() {
  const [scale, setScale] = useState(1.05);
  return (
    <>
      <Head>
        <title>QQ && JUJU - Social World Tour - Quentin Piot</title>
        <meta
          name="description"
          content="The world tour website of QQ && JUJU. Explore the world with us. Quentin Piot - Juliette Cattin"
          key="desc"
        />
      </Head>
      <Flex
        w="100vw"
        position="relative"
        bgImage={"url('https://cdn.wallpapersafari.com/9/52/PzxWaG.jpg')"}
        bgSize="cover"
        overflow="hidden"
        h={{ base: "100%", md: "100vh" }}
      >
        <Flex
          flex={1}
          h="calc(100% - 60px)"
          flexDirection={{ base: "column", md: "row" }}
          overflowY={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          p={12}
        >
          <Flex
            flexDirection={"column"}
            flex={1}
            gap={6}
            p={6}
            justifyContent={"center"}
            style={{
              backdropFilter: "blur(2px)",
            }}
            height={"max-content"}
            borderRadius={40}
            shadow="sm"
          >
            <Heading color={"white"} fontSize="6xl">
              Social World Tour
            </Heading>
            <Text color={"white"} fontSize="xl" fontWeight={500}>
              An application to follow QQ && JuJu and all their adventures
              across the world
            </Text>
            <Box color={"white"} fontSize="xl" fontWeight={500}>
              Download our app:
            </Box>
            <Flex>
              <Image
                src="https://logos-world.net/wp-content/uploads/2021/03/App-Store-Logo-2020.png"
                h={8}
                alt="App Store Logo"
              />
              <Image
                h={8}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1200px-Google_Play_Arrow_logo.svg.png"
                alt="Play Store logo"
              />
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            flex={1}
            p={12}
            gap={6}
            h="100%"
            w="100%"
            justifyContent={"center"}
            position="relative"
          >
            <Box h="60vh" w="100%">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={scale}
                transitionSpeed={2500}
                style={{ width: "100%", height: "100%" }}
              >
                <NextImage
                  src="/images/phone.png"
                  alt="Social World Tour"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Tilt>
            </Box>
          </Flex>
        </Flex>
        <Box position="absolute" bottom={15} left={15}>
          <Text color={"white"} fontSize="md" fontWeight={500}>
            Social World Tour @ 2023
          </Text>
        </Box>
      </Flex>
    </>
  );
}
