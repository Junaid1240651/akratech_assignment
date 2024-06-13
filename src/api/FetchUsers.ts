import axios from 'axios';

// Define the IUser interface to provide a type-safe structure for user objects
export interface IUser {
  id: string;
  name: string;
  picture: string;
}

// Function to fetch users from the Random User API
const FetchUsers = async (): Promise<IUser[]> => {
  // Make an API call to fetch 50 random users
  const response = await axios.get('https://randomuser.me/api/?results=50');
  
  // Map the API response to match the IUser interface
  return response.data.results.map((user: any) => ({
    id: user.login.uuid, // Extract and set the user ID
    name: `${user.name.first} ${user.name.last}`, // Concatenate first and last names
    picture: user.picture.large // Extract and set the user's profile picture
  }));
};

// Export the FetchUsers function as the default export
export default FetchUsers;