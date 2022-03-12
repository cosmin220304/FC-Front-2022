import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { Carousel } from '../blocks';
import PostButtons from './PostButtons';

interface PostInterface {
	title: string;
	description: string;
	images?: Array<string>;
	videos?: [string];
}

function Post({ title, description, images, videos }: PostInterface) {
	return (
		<Flex
			flexDirection={'column'}
			p="2"
			gap="2"
			color="white"
			m="auto"
			bg="secondary"
			maxW={[ 'sm', 'lg' ]}
			borderWidth="1px"
			borderRadius="lg"
		>
			<Text bg="secondary-light" p="2" borderRadius="lg">
				{title}
			</Text>
			{images && <Carousel images={images} />}
			<PostButtons />
		</Flex>
	);
}

export default Post;
