import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import FIICodeLogo from "../../assets/FIICodeLogo.png";

function Footer() {
  return (
    <Flex p="4" bg="secondary" textColor="white" alignItems="center">
      <Text flex="1" fontSize="small" fontWeight="bold">
        Copyright © Javascript Is Overpowered 2022
      </Text>
      <Image w="32" h="6" src={FIICodeLogo} />
    </Flex>
  );
}

export default Footer;
