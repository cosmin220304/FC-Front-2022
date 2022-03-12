import React from 'react';
import { MessagesButton, SaveButton, ShareButton, UpvoteButtons } from '../blocks';
import { Flex } from '@chakra-ui/react';

function PostButtons() {
	return (
		<Flex bg="secondary-light" alignItems="center" borderRadius="lg" justifyContent={'space-around'}>
			<UpvoteButtons onClickUpvote={() => {}} onClickDownvote={() => {}} upvotes={123} isDownvoted />
			<MessagesButton onClick={() => {}} messagesCount={123} />
			<SaveButton onClick={() => {}} isSaved />
			<ShareButton onClick={() => {}} />
		</Flex>
	);
}

export default PostButtons;
