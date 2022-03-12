import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

interface MessagesButtonInterface {
	onClick: () => void;
	messagesCount: number;
}

function MessagesButton({ onClick, messagesCount }: MessagesButtonInterface) {
	return (
		<Button onClick={onClick} display="flex" gap="2" variant="unstyled">
			<FontAwesomeIcon icon={faMessage} />
			<Text>{messagesCount}</Text>
		</Button>
	);
}

export default MessagesButton;
