import React, { ReactElement } from "react";
import { RandomCategoryGeneratorButton } from "./RandomCategoryGeneratorButton";
import "./trivia.css";

export const Trivia = (): ReactElement => {
  const card = (
    <>
      <RandomCategoryGeneratorButton />
    </>
  );

  //USE LODASH DON'T BE AN IDIOT

  return <div className="triviaContainer">{card}</div>;
};
