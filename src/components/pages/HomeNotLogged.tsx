import React from 'react';
import { Button, Flex, Grid, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function HomeNotLogged() {
	const navigate = useNavigate();

	return (
		<Flex mt="32" gap="4" placeItems="center" direction="column">
			<Text mt="8" fontSize="3xl" fontWeight="bold">
				Bun venit!
			</Text>
			<Text textAlign="center" w="75vw">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure
			</Text>
			<Grid mt="4" templateColumns="1fr 1fr" gap="4">
				<Button bg="primary-dark" onClick={() => navigate('/login')}>
					Autentificare
				</Button>
				<Button bg="primary-dark" onClick={() => navigate('/register')}>
					Inregistrare
				</Button>
			</Grid>
		</Flex>
	);
}

export default HomeNotLogged;
