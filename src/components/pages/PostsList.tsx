import React, { useContext, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { CreatePostModal, PostCard } from "../constructed";
import { CreatePostButton, SortByButtons } from "../blocks";
import { PostContext } from "../../hooks/PostContext";
import { Post } from "../../types";
import { useFormik } from "formik";
import { UserContext } from "../../hooks/UserContext";

function PostsList() {
  const { posts, dispatch, isPending } = useContext(PostContext);
  const { userState } = useContext(UserContext);
  const { user } = userState;

  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState<Partial<Post>>({});
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOnSubmit = (post: Partial<Post>) => {
    console.log(post, user!.name);
    dispatch({
      type: "post",
      payload: { ...post, author: user!.name },
    });
    handleCloseModal();
  };

  return (
    <Flex
      direction={["column-reverse", "row"]}
      justifyContent="center"
      h="100%"
      w="100%"
      overflow="scroll"
    >
      {/* Posts list */}
      <Flex mt="2" gap="1" direction="column" alignItems="center">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </Flex>

      {/* Right side banner */}
      <Flex gap="2" m="2" mb="0" direction="column">
        <SortByButtons />
        <CreatePostButton onClick={handleOpenModal} />
      </Flex>
      <CreatePostModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleOnSubmit}
      />
    </Flex>
  );
}

export default PostsList;
