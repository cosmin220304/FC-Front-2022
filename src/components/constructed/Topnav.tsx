import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../blocks";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <Flex p="4" bg="primary.light" color="white" alignItems="center">
      <Text flex="1" fontSize="xl" fontWeight="bold">
        <Link to="/">Home</Link>
      </Text>
      <Link to="/about">About</Link>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}

export default Topnav;
