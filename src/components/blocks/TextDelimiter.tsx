import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';

function TextDelimiter({ text }: { text: string }) {
	return (
		<Flex alignItems="center" gap="4">
			<Divider />
			<Text>{text}</Text>
			<Divider />
		</Flex>
	);
}

export default TextDelimiter;
