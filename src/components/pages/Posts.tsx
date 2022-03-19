import React from 'react';
import { Flex } from '@chakra-ui/react';
import { PostCard } from '../constructed';
import { CreatePostButton, SortByButtons } from '../blocks';

function Posts() {
	const postsList = [
		{
			id: '1',
			author: 'cosmin',
			county: 'Iasi',
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
			images: [ 'https://bit.ly/2Z4KKcF', 'https://bit.ly/3Cz3EJf' ],
			upvotes: 123,
			messages: [],
			createdDate: '2020-01-01T00:00:00.000Z'
		},
		{
			id: '2',
			author: 'cosmin ',
			county: 'Iasi',
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
			images: [ 'https://bit.ly/2Z4KKcF' ],
			upvotes: 123,
			messages: [],
			createdDate: '2020-01-01T00:00:00.000Z'
		},
		{
			id: '3',
			author: 'cosmin',
			county: 'Iasi',
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
			upvotes: 123,
			messages: [],
			createdDate: '2020-01-01T00:00:00.000Z'
		}
	];

	return (
		<Flex direction={[ 'column-reverse', 'row' ]} justifyContent="center" h="100%" w="100%" overflow="scroll">
			{/* Posts list */}
			<Flex mt="2" gap="1" direction="column" alignItems="center">
				{postsList.map((post) => <PostCard key={post.id} {...post} />)}
			</Flex>

			{/* Right side banner */}
			<Flex gap="2" m="2" mb="0" direction="column">
				<SortByButtons onChange={() => {}} />
				<CreatePostButton onClick={() => {}} />
			</Flex>
		</Flex>
	);
}

export default Posts;
