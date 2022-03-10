import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Topnav() {
  const navigate = useNavigate();

  return (
    <Flex p="4" bg="secondary" color="white" alignItems="center">
      <Box cursor="pointer" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
      </Box>
      <Text ml="2" flex="1" fontSize="xl" fontWeight="bold">
        <Link to="/">Prablo</Link>
      </Text>
      <Link to="/about">About</Link>
    </Flex>
  );
}

export default Topnav;
