import { useEffect, useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: 'giorgi',
        surname: 'charashvili',
        age: 17,
      },
    ]);
  }, []);
  return <Child isLoggedIn users={users} />;
};
