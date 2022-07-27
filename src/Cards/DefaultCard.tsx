import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import starWarsTrivia from "../assets/starWarsTrivia.svg";
import "../cards-css/defaultCard.css";

interface DefaultCardProps {
  cardData: ReactElement;
}

const DefaultCard = (props: DefaultCardProps): ReactElement => {
  const defaultCard = (
    <Card sx={{ maxWidth: 500, minWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={starWarsTrivia}
      />
      <CardContent className={"cardContentContainer"}>
        <Typography gutterBottom variant="h5" component="div" color={"white"}>
          <span className={"defaultCardText"}>Star Wars Trivia Card</span>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {props.cardData}
        </Typography>
      </CardContent>
    </Card>
  );
  // some new code
  return <div className={"cardContainer"}>{defaultCard}</div>;
};

export default DefaultCard;
