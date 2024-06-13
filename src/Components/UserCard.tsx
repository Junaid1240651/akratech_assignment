import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { IUser } from "../db";

// Define the props for the UserCard component
interface UserCardProps {
  user: IUser;
  onDelete: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <Card
      sx={{
        border: "2px solid black",
        borderRadius: "8px",
        // padding: 0.5,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={user.picture}
        alt={user.name}
      />
      <CardContent sx={{ paddingRight: "5px" }}>
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            color: "red",
            ":hover": {
              backgroundColor: "rgba(255,0,0,0.2)", // Light red background on hover
              color: "red", // Red text color on hover
            },
          }}
          size="medium"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
