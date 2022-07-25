import React, { ReactElement } from "react";
import DefaultCard from "././Cards/DefaultCard";
import "./trivia.css";

export const Trivia = (): ReactElement => {
  const card = (
    <React.Fragment>
      <DefaultCard />
    </React.Fragment>
  );

  //USE LODASH DON'T BE AN IDIOT

  return <div className="container">{card}</div>;
};
