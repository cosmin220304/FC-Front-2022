import React from 'react';
import { Text, Flex, Badge, Box } from '@chakra-ui/react';
import { Carousel, MessagesButton, SaveButton, ShareButton, UpvoteButtons } from '../blocks';
import { Post } from '../../types';

function PostCard({ id, title, description, images, author, upvotes, messages, county, createdDate }: Post) {
	return (
		<Flex
			w={[ 'sm', 'lg' ]}
			flexDirection={[ 'column', 'row-reverse' ]}
			p="2"
			gap="2"
			color="white"
			bg="secondary"
			borderWidth="1px"
			borderRadius="lg"
		>
			{/* Post content */}
			<Box>
				{/* County + date */}
				<Flex gap="2" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
					<Badge w="fit-content" variant="outline">
						{county}
					</Badge>
					<Text fontSize="smaller">
						postat de {author}, {new Date(createdDate).toUTCString()}
					</Text>
				</Flex>

				{/* Title */}
				<Text bg="secondary-light" m="2" p="2" borderRadius="lg">
					{title}
				</Text>

				{/* Image or (description of post if no image provided) */}
				<Box ml="2" mr="2">
					{images ? (
						<Carousel images={images} />
					) : (
						<Text bg="secondary-light" p="2" borderRadius="lg">
							{description}
						</Text>
					)}
				</Box>
			</Box>

			{/* Post buttons */}
			<Flex
				flexDirection={[ 'row', 'column' ]}
				bg="secondary-light"
				alignItems="center"
				borderRadius="lg"
				justifyContent={[ 'space-around', 'normal' ]}
				gap={[ 0, 8 ]}
				p={[ 0, 1 ]}
				pt={[ 0, 4 ]}
				pb={[ 0, 4 ]}
				className={'post-card-buttons'}
			>
				<UpvoteButtons onClickUpvote={() => {}} onClickDownvote={() => {}} upvotes={upvotes} />
				<MessagesButton onClick={() => {}} messagesCount={messages.length} />
				<SaveButton onClick={() => {}} />
				<ShareButton onClick={() => {}} />
			</Flex>
		</Flex>
	);
}

export default PostCard;
