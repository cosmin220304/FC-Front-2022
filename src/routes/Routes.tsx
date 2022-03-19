import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostDetails, Posts, Welcome, Login, Register } from '../components/pages';
import { UserContext } from '../hooks/UserContext';

function AppRoutes() {
	const [ user ] = useContext(UserContext);

	// private routes
	if (!user) {
		return (
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Posts />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="/posts/:postId" element={<PostDetails />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default AppRoutes;
