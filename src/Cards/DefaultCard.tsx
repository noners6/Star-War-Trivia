import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import triviaSvg from "../assets/triviaSvg.svg";

const DefaultCard = (): ReactElement => {
  const defaultCard = (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={triviaSvg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Secret...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The child goes here!
        </Typography>
      </CardContent>
    </Card>
  );
  // some new code
  return <div>{defaultCard}</div>;
};

export default DefaultCard;
