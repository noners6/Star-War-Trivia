import { CardActions, CardContent } from "@mui/material";
import React, { ReactElement } from "react";
import { RandomCategoryGeneratorButton } from "./RandomCategoryGeneratorButton";
import "./trivia.css";

export const Trivia = (): ReactElement => {
  const card = (
    <React.Fragment>
      <CardActions>
        <RandomCategoryGeneratorButton />
      </CardActions>

      <CardContent></CardContent>
    </React.Fragment>
  );

  //USE LODASH DON'T BE AN IDIOT

  return <div className="container">{card}</div>;
};
