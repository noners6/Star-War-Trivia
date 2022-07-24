import { Button } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { getData } from "./data/api";
import { randomGenerator } from "./util";

export const RandomCategoryGeneratorButton = (): ReactElement => {
  const [num, setNum] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const [category, setCategory] = useState("");
  const [entry, setEntry] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    randomCard();
    getData(category, entry).then((data: any) => {
      setData(data);
    });
  }, []);

  const handleOnClick = () => {
    setNum(randomGenerator(1, 1));
    setIsRendered(true);
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

  return (
    <div>
      <Button onClick={handleOnClick}>Click to choose a category!</Button>
      {/*isRendered && randomCard()*/}
    </div>
  );
};
