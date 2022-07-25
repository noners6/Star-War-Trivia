import { Button } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import PersonCard from "./Cards/PersonCard";
import { getStarWarsData } from "./data/api";
import { randomGenerator } from "./util";

export const RandomCategoryGeneratorButton = (): ReactElement => {
  const [num, setNum] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [category, setCategory] = useState("");
  const [entry, setEntry] = useState("");
  const [data, setData] = useState([]);
  const [objectData, setObjectData] = useState({});
  const [state, setState] = useState(false);

  useEffect(() => {
    if (userClicked) {
      setUserClicked(false);
      randomCard();
      getStarWarsData(category, entry).then((data: any) => {
        setData(data);
      });
      const key: string = "data";
      setObjectData(data[key as keyof never[]]);
      setUserClicked(false);
    }
  }, [userClicked, setUserClicked]);

  const handleOnClick = (e: any) => {
    e.preventDefault();
    console.log("you clicked the button");
    setNum(randomGenerator(1, 1));
    setUserClicked(true);
  };

  function randomCard() {
    switch (num) {
      case 1:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
      case 2:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
      case 3:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
      case 4:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
      case 5:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
      case 6:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
      default:
        setCategory("people");
        setEntry(randomGenerator(1, 1).toString());
        return;
    }
  }

  function callCard() {
    setUserClicked(true);
    switch (num) {
      case 1:
        return <PersonCard personData={objectData} />;
      case 2:
        return null;
      case 3:
        return null;
      case 4:
        return null;
      case 5:
        return null;
      case 6:
        return null;
      default:
        return null;
    }
  }

  return (
    <div>
      <Button onClick={handleOnClick}>Click to choose a category!</Button>
      {userClicked && callCard()}
    </div>
  );
};
