import React, { ReactElement } from "react";
import { CardDataGenerator } from "./CardDataGenerator";
import "./trivia.css";

export const Trivia = (): ReactElement => {
  const card = <CardDataGenerator />;

  return <div className="triviaContainer">{card}</div>;
};
