import { UserType } from '../types';
export const Child = (props: { users: UserType[]; isLoggedIn: boolean }) =>
  props.users.length !== 0 ? (
    <ul>
      {props.isLoggedIn === true ? (
        props.users.map((user) => (
          <div
            key={user.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#413b3b',
              padding: '40px',
              borderRadius: '5px',
            }}
          >
            <span>Name: {user.name}</span>
            <span>Surname: {user.surname}</span>
            <span>Age: {user.age}</span>
          </div>
        ))
      ) : (
        <span>You are not authorized to see user list.</span>
      )}
    </ul>
  ) : (
    <h1>No users in the system</h1>
  );
