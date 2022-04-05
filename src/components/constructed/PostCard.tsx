import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  MessagesButton,
  SaveButton,
  ShareButton,
  UpvoteButtons,
} from "../blocks";
import { Post } from "../../types";
import { useNavigate } from "react-router-dom";
import { PostInformation } from "../composites";

function PostCard({
  id,
  post_id,
  status,
  content,
  up_votes,
  down_votes,
}: Post) {
  const navigate = useNavigate();

  return (
    <Flex
      w={["sm", "lg"]}
      flexDirection={["column", "row-reverse"]}
      p="2"
      gap="2"
      color="white"
      bg="secondary"
      borderWidth="1px"
      borderRadius="lg"
    >
      <PostInformation
        content={content}
        hideDescription={content.images && content.images.length > 0}
      />

      {/* Post buttons */}
      <Flex
        flexDirection={["row", "column"]}
        bg="secondary-light"
        alignItems="center"
        borderRadius="lg"
        justifyContent={["space-around", "normal"]}
        gap={[0, 8]}
        p={[0, 1]}
        pt={[0, 4]}
        pb={[0, 4]}
        className={"post-card-buttons"}
      >
        <UpvoteButtons
          onClickUpvote={() => {}}
          onClickDownvote={() => {}}
          upvotes={up_votes - down_votes}
        />
        <MessagesButton
          onClick={() => navigate(`/posts/${id}`)}
          messagesCount={1} //todo fetch from message context
        />
        <SaveButton onClick={() => {}} />
        <ShareButton onClick={() => {}} />
      </Flex>
    </Flex>
  );
}

export default PostCard;
