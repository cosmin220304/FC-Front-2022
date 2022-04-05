import React from "react";
import { Badge, Flex, Text } from "@chakra-ui/react";

interface PostAuthorAndCountyInterface {
  county: string;
  author: string;
  createdDate: string;
}

function PostAuthorAndCounty({
  county,
  author,
  createdDate,
}: PostAuthorAndCountyInterface) {
  return (
    <Flex
      pl="2"
      pr="2"
      gap="2"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      <Badge variant="outline">{county}</Badge>
      <Text fontSize="smaller">
        {author}, {new Date(createdDate).toUTCString()}
      </Text>
    </Flex>
  );
}

export default PostAuthorAndCounty;
