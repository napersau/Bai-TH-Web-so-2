import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";

import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const [rightText, setRightText] = useState("");

  useEffect(() => {
  
    const userMatch = matchPath({ path: "/users/:userId" }, location.pathname);
    const photoMatch = matchPath({ path: "/photos/:userId" }, location.pathname);

    const match = userMatch || photoMatch;

    if (match && match.params && match.params.userId) {
      const userId = match.params.userId;
      const user = models.userModel(userId);

      if (user) {
        if (photoMatch) {
          setRightText(`Photos of ${user.first_name}`);
        } else {
          setRightText(user.first_name);
        }
      } else {
        setRightText("");
      }
    } else {
      setRightText("");
    }
  }, [location]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Nguyễn Đức Khởi - B22DCCN470
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ marginLeft: 'auto' }}>
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
