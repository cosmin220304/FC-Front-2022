import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Carousel, PostAuthorAndCounty } from '../blocks';

interface PostInformationInterface {
	county: string;
	author: string;
	createdDate: string;
	title: string;
	description: string;
	images?: string[];
	hideDescription?: boolean;
}

function PostInformation({
	county,
	author,
	createdDate,
	title,
	description,
	images,
	hideDescription
}: PostInformationInterface) {
	return (
		<Box>
			<PostAuthorAndCounty county={county} author={author} createdDate={createdDate} />

			<Text bg="secondary-light" m="2" p="2" borderRadius="lg">
				{title}
			</Text>

			{!hideDescription && (
				<Text overflow="scroll" bg="secondary-light" m="2" p="2" borderRadius="lg">
					{description}
				</Text>
			)}

			{images && (
				<Box ml="2" mr="2">
					<Carousel images={images} />
				</Box>
			)}
		</Box>
	);
}

export default PostInformation;
