import React, { useContext, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  Carousel,
  SaveButton,
  ShareButton,
  SortByButtons,
  UpvoteButtons,
} from "../blocks";
import { PostInformation } from "../composites";
import { PostContext } from "../../hooks/PostContext";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { posts, dispatch } = useContext(PostContext);
  const { postId } = useParams();

  useEffect(() => {
    if (!postId) return;
    dispatch({
      type: "getById",
      payload: {
        id: postId,
      },
    });
  }, [postId]);

  const Styles = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
      <Flex
        w={["sm", "3xl"]}
        flexDirection="column"
        p="2"
        gap="2"
        bg="secondary"
        borderRadius="lg"
      >
        {children}
      </Flex>
    );
  };

  const post = posts[0];
  if (!post)
    return (
      <Box display="grid" justifyContent="center" placeItems="center">
        Page not found
      </Box>
    );

  return (
    <Flex
      alignItems="center"
      overflow="scroll"
      direction="column"
      color="white"
      gap="2"
      p="4"
    >
      <Styles>
        <PostInformation {...post} />
      </Styles>

      <Styles>
        <Text>Commentarii:</Text>
        <Textarea color="black" bg="white" placeholder="Scrie un mesaj..." />
        <Button alignSelf="end" w="xs" color="black" bg="primary-dark">
          Adauga comentariu
        </Button>
      </Styles>

      {/* todo->change sort by to use comments context */}
      <Styles>
        <Box color="black">
          <SortByButtons />
        </Box>
      </Styles>

      {/* todo use message context */}
      {/* {post.messages.map((message) => (
        <Styles>
          <Flex gap="2" alignItems="center">
            <UpvoteButtons
              onClickUpvote={() => {}}
              onClickDownvote={() => {}}
              upvotes={message.upvotes}
            />
            <Box flex="1" />
            <Badge w="fit-content" variant="outline">
              {post.county}
            </Badge>
            <Text fontSize="smaller">
              postat de {post.author},{" "}
              {new Date(post.createdDate).toUTCString()}
            </Text>
          </Flex>

          <Text p="2" bg="secondary-light" borderRadius="lg">
            {message.text}
          </Text>
        </Styles>
      ))} */}
    </Flex>
  );
}

export default PostDetails;
