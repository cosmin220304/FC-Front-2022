import React, { useContext, useEffect, useState } from "react";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import { PostContext } from "../../hooks/PostContext";

function SortByButtons() {
  const { dispatch } = useContext(PostContext);
  const [selected, setSelected] = useState<"popular" | "top" | "new">("top");

  const handleChange = (value: "popular" | "top" | "new") => {
    dispatch({
      type: "sort",
      payload: value,
    });
    setSelected(value);
  };

  return (
    <Box maxH="28" p="4" bg="secondary" borderRadius="lg">
      <Text color="white">Sorteaza dupa:</Text>
      <Divider mb="2" />
      <Button
        onClick={() => handleChange("popular")}
        p="2"
        variant="unstyled"
        bg={selected === "popular" ? "primary-dark" : "InactiveBorder"}
        mr="2"
      >
        Popular
      </Button>
      <Button
        onClick={() => handleChange("top")}
        p="2"
        variant="unstyled"
        bg={selected === "top" ? "primary-dark" : "InactiveBorder"}
        mr="2"
      >
        Top
      </Button>
      <Button
        variant="unstyled"
        p="2"
        onClick={() => handleChange("new")}
        bg={selected === "new" ? "primary-dark" : "InactiveBorder"}
      >
        Nou
      </Button>
    </Box>
  );
}

export default SortByButtons;
