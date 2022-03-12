import React, { ReactNode, useEffect, useState } from 'react';

const UserContext = React.createContext<any>({});

const UserContextWrapper = ({ children }: { children: ReactNode }) => {
	const [ user, setUser ] = useState();

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) {
			setUser(JSON.parse(user));
		}
	}, []);

	useEffect(
		() => {
			if (user) {
				localStorage.setItem('user', JSON.stringify(user));
			}
		},
		[ user ]
	);

	return <UserContext.Provider value={[ user, setUser ]}>{children}</UserContext.Provider>;
};

export { UserContextWrapper, UserContext };
