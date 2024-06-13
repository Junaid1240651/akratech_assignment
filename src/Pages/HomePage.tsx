import React, { useEffect } from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import useUsers from "../hooks/useUsers";
import Spinner from "../Components/Spinner";
import UserCard from "../Components/UserCard";

const HomePage: React.FC = () => {
  const { users, loadUsers, deleteUser } = useUsers(); // Use custom hook to get users, loadUsers, and deleteUser functions

  useEffect(() => {
    loadUsers(); // Load users data when component mounts
  }, []);
  return (
    <>
      {users.length > 0 ? (
        <Container
          sx={{ border: "2px solid black", borderRadius: "8px", padding: 2 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => loadUsers(true)} // Pass true to Refresh reload from API
              variant="contained"
              color="primary"
              style={{ marginBottom: 10 }}
            >
              Refresh
            </Button>
          </Box>

          <Box>
            <Typography variant="h4" marginBottom={2}>
              Total Users: {users.length}
            </Typography>
            <Grid container spacing={3}>
              {users.map((user) => (
                <Grid item key={user.id} xs={12} sm={4} md={3}>
                  <UserCard user={user} onDelete={deleteUser} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner />
        </Box>
      )}
    </>
  );
};

export default HomePage;
