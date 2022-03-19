import React from 'react';
import { Badge, Flex, Text } from '@chakra-ui/react';

interface PostAuthorAndCountyInterface {
	county: string;
	author: string;
	createdDate: string;
}

function PostAuthorAndCounty({ county, author, createdDate }: PostAuthorAndCountyInterface) {
	return (
		<Flex gap="2" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
			<Badge w="fit-content" variant="outline">
				{county}
			</Badge>
			<Text fontSize="smaller">
				postat de {author}, {new Date(createdDate).toUTCString()}
			</Text>
		</Flex>
	);
}

export default PostAuthorAndCounty;
