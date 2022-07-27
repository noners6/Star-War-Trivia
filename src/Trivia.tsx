import React, { ReactElement } from "react";
import { RandomCategoryGeneratorButton } from "./RandomCategoryGeneratorButton";
import "./trivia.css";

export const Trivia = (): ReactElement => {
  const card = (
    <>
      <RandomCategoryGeneratorButton />
    </>
  );

  return <div className="triviaContainer">{card}</div>;
};
