import { Button, Icon, Text } from '@chakra-ui/react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface SaveButtonInterface {
	onClick: () => void;
	isSaved?: boolean;
}

function SaveButton({ onClick, isSaved }: SaveButtonInterface) {
	return (
		<Button onClick={onClick} gap="2" display="flex" variant="unstyled">
			<Icon fontSize="2xl" color={isSaved ? 'primary-dark' : 'white'}>
				<FontAwesomeIcon icon={faStar} />
			</Icon>
			<Text>Save</Text>
		</Button>
	);
}

export default SaveButton;
