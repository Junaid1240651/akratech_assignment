
import { useState, useEffect } from 'react';
import { db, IUser,users as usersTable } from '../db';
import FetchUsers from '../api/FetchUsers';
import sortUserByName from '../utils/sortUserByName';

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

   // Function to load users either from the API or IndexedDB
  const loadUsers = async (refreshReload: boolean = false) => {
    console.log(db);
    
    const storedUsers = await usersTable.toArray();
    try {
      if (refreshReload || storedUsers.length === 0) {
        const userArray = await FetchUsers(); // Fetch users from API
        await usersTable.clear(); // Clear existing users in IndexedDB
        await usersTable.bulkAdd(userArray); // Add new users to IndexedDB
        setUsers(sortUserByName(userArray)); // Set sorted users
      } else {
        const storedUsers = await usersTable.toArray();
        setUsers(sortUserByName(storedUsers)); // Set sorted users from IndexedDB
      }
    } catch (error) {
      console.error('Error loading users:', error); // Log any errors during the process
    } 
  };

  // Function to delete a user by ID
  const deleteUser = async (id: string) => {
    try {
      await usersTable.delete(id); // Delete user from IndexedDB
      const allUsers = await usersTable.toArray(); // Fetch remaining users from IndexedDB
      setUsers(sortUserByName(allUsers)); // Set sorted users after deletion
    } catch (error) {
      console.error('Error deleting user:', error); // Log any errors during deletion
    }
  };

  return { users,  loadUsers, deleteUser };
};

export default useUsers;