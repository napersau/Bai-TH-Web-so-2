import React from "react";
import { Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1"><strong>Location:</strong> {user.location}</Typography>
      <Typography variant="body1"><strong>Occupation:</strong> {user.occupation}</Typography>
      <Typography variant="body1"><strong>Description:</strong> {user.description}</Typography>

      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to={`/photos/${userId}`}
        style={{ marginTop: "1em" }}
      >
        Xem ảnh của {user.first_name}
      </Button>
    </div>
  );
}

export default UserDetail;
