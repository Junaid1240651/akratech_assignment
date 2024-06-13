
import Dexie, { Table } from 'dexie';

// Define the IUser interface
export interface IUser {
  id: string;
  name: string;
  picture: string;
}

// Create and configure the Dexie database instance
const db = new Dexie("UserDatabase");

// Define the schema for the 'users' table
db.version(1).stores({
  users: 'id,name,picture'
});

// Type-safe access to the 'users' table
const users: Table<IUser, string> = db.table('users');

export { db, users };