import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Post } from '../composites';

function HomeLogged() {
	return (
		<Flex gap="4" overflow="scroll" direction="column">
			<Post
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				description="test"
				images={[ 'https://bit.ly/2Z4KKcF', 'https://bit.ly/3Cz3EJf' ]}
			/>
			<Post
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				description="test"
				images={[ 'https://bit.ly/2Z4KKcF' ]}
			/>
			<Post
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				description="test"
			/>
		</Flex>
	);
}

export default HomeLogged;
