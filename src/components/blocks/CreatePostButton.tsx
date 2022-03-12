import React from 'react';
import { Box, Text, Button, Divider } from '@chakra-ui/react';

interface CreatePostButtonInterface {
	onClick: () => void;
}

function CreatePostButton({ onClick }: CreatePostButtonInterface) {
	return (
		<Box maxH="28" p="4" bg="secondary" borderRadius="lg">
			<Text color="white">Adauga o postare noua:</Text>
			<Divider mb="2" />
			<Button onClick={onClick} p="2" mr="2">
				Click aici
			</Button>
		</Box>
	);
}

export default CreatePostButton;
