import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import { TextDelimiter } from '../blocks';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

function Login() {
	const navigate = useNavigate();
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errors, setErrors ] = useState({
		username: '',
		password: ''
	});
	const [ , setUser ] = useContext(UserContext);

	const checkIsValid = () => {
		let isValid = true;

		if (!username) {
			setErrors((prev) => ({ ...prev, username: 'Numele de utilizator este obligatoriu!' }));
			isValid = false;
		} else {
			setErrors((prev) => ({ ...prev, username: '' }));
		}

		if (!password) {
			setErrors((prev) => ({ ...prev, password: 'Parola este obligatorie!' }));
			isValid = false;
		} else {
			setErrors((prev) => ({ ...prev, password: '' }));
		}

		return isValid;
	};

	const handleSubmit = () => {
		if (!checkIsValid()) return;
		// todo: call api
		// if fail
		//  --> setErrors((prev) => ({ ...prev, username: "Username si parola nu se potrivesc!" }));
		// else
		setUser({
			name: username
		});
		navigate('/');
	};

	return (
		<Box ml="auto" mr="auto" mt="16">
			<Box bg="secondary" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
				<Image src={'https://bit.ly/2Z4KKcF'} alt={'login'} />
				<Box p="6">
					<Box display="flex" gap="2" flexDirection="column" alignItems="baseline">
						<Text textAlign="center" color="white" fontSize="2xl">
							Autentificare
						</Text>
						<Text color="red">{errors.username}</Text>
						<Input
							bg="white"
							type="text"
							placeholder="Nume de utilizator"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							isInvalid={!!errors.username}
						/>
						<Text color="red">{errors.password}</Text>
						<Input
							bg="white"
							type="password"
							placeholder="Parola"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							isInvalid={!!errors.password}
						/>
					</Box>
				</Box>
			</Box>
			<Flex flexDirection="column" mt="2" gap="2">
				<Button onClick={handleSubmit} bg="primary-dark">
					Autentificare
				</Button>
				<TextDelimiter text="or" />
				<Button bg="white">Inregistrare</Button>
			</Flex>
		</Box>
	);
}

export default Login;
