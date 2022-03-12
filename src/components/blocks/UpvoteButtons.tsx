import React, { MouseEventHandler, useState } from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface UpvoteButtonsInterface {
	onClickUpvote: () => void;
	onClickDownvote: () => void;
	upvotes: number;
	isUpvoted?: boolean;
	isDownvoted?: boolean;
}

function UpvoteButtons({ onClickUpvote, onClickDownvote, upvotes, isUpvoted, isDownvoted }: UpvoteButtonsInterface) {
	return (
		<Flex gap="2" alignItems="center">
			<Icon cursor="pointer" color={isUpvoted ? 'primary-dark' : 'white'} onClick={onClickUpvote}>
				<FontAwesomeIcon icon={faArrowUp} />
			</Icon>
			<Text>{upvotes}</Text>
			<Icon cursor="pointer" color={isDownvoted ? 'primary-dark' : 'white'} onClick={onClickDownvote}>
				<FontAwesomeIcon icon={faArrowDown} />
			</Icon>
		</Flex>
	);
}

export default UpvoteButtons;
