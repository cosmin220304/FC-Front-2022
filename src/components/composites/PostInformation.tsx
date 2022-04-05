import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Carousel, PostAuthorAndCounty } from "../blocks";

interface PostInformationInterface {
  content: {
    createdDate: string;
    title: string;
    description: string;
    images?: string[];
    county: string;
    reporterName: string;
  };
  hideDescription?: boolean;
}

function PostInformation({
  content,
  hideDescription,
}: PostInformationInterface) {
  return (
    <Box>
      <PostAuthorAndCounty
        county={content.county}
        author={content.reporterName}
        createdDate={content.createdDate}
      />

      <Text bg="secondary-light" m="2" p="2" borderRadius="lg">
        {content.title}
      </Text>

      {!hideDescription && (
        <Text
          overflow="scroll"
          bg="secondary-light"
          m="2"
          p="2"
          borderRadius="lg"
        >
          {content.description}
        </Text>
      )}

      {content.images && (
        <Box ml="2" mr="2">
          <Carousel images={content.images} />
        </Box>
      )}
    </Box>
  );
}

export default PostInformation;
