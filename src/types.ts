export interface UserType {
  id: number;
  name: string;
  surname: string;
  age: number;
}
export interface ChildProps {
  users: UserType[];
  isLoggedIn: boolean;
}
