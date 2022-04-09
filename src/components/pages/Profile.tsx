import React, { useContext } from "react";
import { Badge, Flex, Text } from "@chakra-ui/react";
import { UserContext } from "../../hooks/UserContext";
import { PostContext } from "../../hooks/PostContext";
import { PostCard } from "../constructed";

function Profile() {
  //todo, call for favorites
  const { posts, dispatch, isPending } = useContext(PostContext);
  const { userState } = useContext(UserContext);
  const { user } = userState;

  return (
    <Flex
      alignItems="center"
      overflow="scroll"
      direction="column"
      color="white"
      gap="2"
      p="4"
    >
      <Flex
        alignItems="center"
        p="2"
        gap="2"
        bg="secondary"
        borderRadius="lg"
        w={["sm", "lg"]}
      >
        <Text> {user?.name}</Text>
        {/* TODO ADD MORE USER DETAILS */}
      </Flex>

      <Flex gap="1" direction="column" alignItems="center">
        <Flex w={["sm", "lg"]} p="2" bg="secondary" borderRadius="lg">
          Postari favorite:
        </Flex>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Profile;
