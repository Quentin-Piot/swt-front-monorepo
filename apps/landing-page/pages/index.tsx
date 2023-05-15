import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function LandingPage() {
  return (
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
            An application to follow QQ && JuJu and all their adventures across
            the world
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
          justifyContent={"center"}
        >
          <Image
            src="https://b1278086.smushcdn.com/1278086/wp-content/uploads/2022/09/app-landing-page-22-3-12320-1.png?lossy=1&strip=1&webp=1s"
            h="60vh"
            fit="contain"
            alt="Social World Tour"
          ></Image>
        </Flex>
      </Flex>
      <Box position="absolute" bottom={15} left={15}>
        <Text color={"white"} fontSize="md" fontWeight={500}>
          Social World Tour @ 2023
        </Text>
      </Box>
    </Flex>
  );
}
