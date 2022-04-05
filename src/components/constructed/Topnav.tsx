import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassLocation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Topnav() {
  const navigate = useNavigate();

  return (
    <Flex p="4" bg="secondary" color="white" alignItems="center">
      <Flex cursor="pointer" onClick={() => navigate("/")} alignItems="center">
        <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        <Text ml="2" fontSize="xl" fontWeight="bold">
          Prablo
        </Text>
      </Flex>

      <Flex ml="4" flex="1">
        <Input bg="white" w={["80%", "lg"]} placeholder="Search..." />
      </Flex>

      <Flex
        cursor="pointer"
        onClick={() => navigate("/profile")}
        alignItems="center"
      >
        <FontAwesomeIcon icon={faUser} />
        <Text ml="2" fontWeight="bold">
          Profile
        </Text>
      </Flex>
    </Flex>
  );
}

export default Topnav;
