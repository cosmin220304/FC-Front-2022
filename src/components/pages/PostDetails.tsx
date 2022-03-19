import React from 'react';
import { Badge, Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { Carousel, SaveButton, ShareButton, UpvoteButtons } from '../blocks';
import { Post } from '../../types';
import { PostInformation } from '../composites';

function PostDetails() {
	const post: Post = {
		id: '1',
		author: 'cosmin',
		county: 'Iasi',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
		images: [ 'https://bit.ly/2Z4KKcF', 'https://bit.ly/3Cz3EJf' ],
		upvotes: 123,
		messages: [
			{
				id: '1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
				upvotes: 3,
				postDate: '2020-01-01T00:00:00.000Z'
			},
			{
				id: '1',
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
				upvotes: 3,
				postDate: '2020-01-01T00:00:00.000Z'
			},
			{
				id: '1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
				upvotes: 3,
				postDate: '2020-01-01T00:00:00.000Z'
			}
		],
		createdDate: '2020-01-01T00:00:00.000Z'
	};

	return (
		<Flex alignItems="center" overflow="scroll" direction="column" color="white" gap="2">
			<Flex w={[ 'sm', '3xl' ]} flexDirection="column" mt="1" p="2" gap="2" bg="secondary" borderRadius="lg">
				<PostInformation {...post} />
			</Flex>

			<Flex w={[ 'sm', '3xl' ]} flexDirection="column" p="2" gap="2" bg="secondary" borderRadius="lg">
				<Text>Commentarii:</Text>
				<Textarea color="black" bg="white" placeholder="Scrie un mesaj..." />
				<Button alignSelf="end" w="xs" color="black" bg="primary-dark">
					Adauga comentariu
				</Button>
			</Flex>

			{post.messages.map((message) => (
				<Flex w={[ 'sm', '3xl' ]} direction="column" gap="2" p="2" bg="secondary" borderRadius="lg">
					<Flex alignItems="center" pl="2" pr="2" bg="secondary-light" gap="2" borderRadius="lg">
						<UpvoteButtons onClickUpvote={() => {}} onClickDownvote={() => {}} upvotes={message.upvotes} />
						<Box flex="1" />
						<Badge w="fit-content" variant="outline">
							{post.county}
						</Badge>
						<Text fontSize="smaller">
							postat de {post.author}, {new Date(post.createdDate).toUTCString()}
						</Text>
					</Flex>

					<Text p="2" bg="secondary-light" borderRadius="lg">
						{message.text}
					</Text>
				</Flex>
			))}

			<Box mb="4" />
		</Flex>
	);
}

export default PostDetails;
