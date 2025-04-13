import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);


  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Ảnh của người dùng ID: {userId}
      </Typography>

      {photos.map((photo) => (
        <Card key={photo._id} sx={{ marginBottom: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={require(`../../images/${photo.file_name}`)}
            alt="user photo"
          />
          <CardContent>
            <Typography variant="body1">
              Ngày đăng: {new Date(photo.date_time).toLocaleString()}
            </Typography>
            {photo.comments && photo.comments.length > 0 && (
              <>
                <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                  Bình luận:
                </Typography>
                {photo.comments.map((comment, index) => (
                  <Typography key={index} variant="body2">
                    {comment.user.first_name}: {comment.comment}
                  </Typography>
                ))}
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
