import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <Flex gap="4" placeItems="center" direction="column">
      <Text mt="8" fontSize="3xl" fontWeight="bold">
        Bun venit!
      </Text>
      <Text mt="8" textAlign="center" w="75vw">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
      </Text>
      <Flex gap="4">
        <Button>Login</Button>
        <Button>Register</Button>
      </Flex>
    </Flex>
  );
}

export default Home;
