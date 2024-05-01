import { getAuth } from 'firebase/auth';
import { ReactNode, createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>();

  getAuth().onAuthStateChanged((user) => {
    if (!user && window.location.pathname !== '/technique-map/#/sign_in') {
      window.location.href = '/technique-map/#/sign_in';
    }
    setUser(user);
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
