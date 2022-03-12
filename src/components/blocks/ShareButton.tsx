import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ShareButtonInterface {
	onClick: () => void;
}

function ShareButton({ onClick }: ShareButtonInterface) {
	return (
		<Button onClick={onClick} gap="2" display="flex" variant="unstyled">
			<FontAwesomeIcon icon={faShare} />
			<Text>Share</Text>
		</Button>
	);
}

export default ShareButton;
