import React, { ReactNode, useState } from 'react';

const UserContext = React.createContext<any>({});

const UserContextWrapper = ({ children }: { children: ReactNode }) => {
	const [ user, setUser ] = useState();

	return <UserContext.Provider value={[ user, setUser ]}>{children}</UserContext.Provider>;
};

export { UserContextWrapper, UserContext };
