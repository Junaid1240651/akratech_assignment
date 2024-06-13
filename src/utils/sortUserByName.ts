import { IUser } from '../db';

const sortUserByName = (usersToSort: IUser[]) => {
  return usersToSort.slice().sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
};

export default sortUserByName;