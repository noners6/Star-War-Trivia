import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Button } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import DefaultCard from "./Cards/DefaultCard";
import FilmCard from "./Cards/FilmCard";
import PersonCard from "./Cards/PersonCard";
import PlanetCard from "./Cards/PlanetCard";
import SpeciesCard from "./Cards/SpeciesCard";
import StarshipCard from "./Cards/StarshipCard";
import VehicleCard from "./Cards/VehiclesCard";
import { getStarWarsData } from "./data/api";
import "./randomGeneratedCategory.css";
import { randomGenerator } from "./util";

// This component renders a button to generate a random card.
// Once the button is clicked, it randomly picks a category and an entry within it,
// then it fetches the data, and passes it to the card components to generate a card.
export const CardDataGenerator = (): ReactElement => {
  const [num, setNum] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [objectData, setObjectData] = useState({});
  const [state, setState] = useState(false);

  // useEffect takes effect after the button is clicked.
  // Button can be clicked any number of times.
  useEffect(() => {
    if (userClicked) {
      const [testCategory, number] = randomCard();
      console.log("category and entry from useEffect", testCategory, number);
      getStarWarsData(testCategory, number).then((data: any) => {
        const key: string = "data";
        console.log("useEffect Data", data);
        setObjectData(data[key as keyof never[]]);
        setUserClicked(false);
      });
    }
  }, [userClicked]);

  const handleOnClick = (e: any) => {
    e.preventDefault();
    console.log("you clicked the button");
    setNum(randomGenerator(1, 6));
    setUserClicked(true);
    setState(true);
  };

  // After the category is chosen, a random card within the chosen categor is selected.
  // Returns the string for the category and the card number within it.
  function randomCard() {
    switch (num) {
      case 1:
        const peopleCategory = "people";
        const peopleNumber = randomGenerator(1, 83).toString();
        return [peopleCategory, peopleNumber];
      case 2:
        const filmCategory = "films";
        const filmNumber = randomGenerator(1, 6).toString();
        return [filmCategory, filmNumber];
      case 3:
        const starshipsCategory = "starships";
        const starshipsNumber = randomGenerator(2, 3).toString();
        return [starshipsCategory, starshipsNumber];
      case 4:
        const vehiclesCategory = "vehicles";
        const vehiclesNumber = randomGenerator(6, 8).toString();
        return [vehiclesCategory, vehiclesNumber];
      case 5:
        const speciesCategory = "species";
        const speciesNumber = randomGenerator(1, 37).toString();
        return [speciesCategory, speciesNumber];

      case 6:
        const planetCategory = "planets";
        const planetNumber = randomGenerator(1, 60).toString();
        return [planetCategory, planetNumber];
      default:
        const people = "people";
        const number = "1";
        return [people, number];
    }
  }

  // After selecting a specific card, based on the selection, calls the
  // appropriate component to render the card.
  function callCard() {
    switch (num) {
      case 1:
        const personCard = <PersonCard personData={objectData} />;
        return <DefaultCard cardData={personCard} />;
      case 2:
        const filmCard = <FilmCard filmData={objectData} />;
        return <DefaultCard cardData={filmCard} />;
      case 3:
        const starshipCard = <StarshipCard starshipData={objectData} />;
        return <DefaultCard cardData={starshipCard} />;
      case 4:
        const vehicleCard = <VehicleCard vehicleData={objectData} />;
        return <DefaultCard cardData={vehicleCard} />;
      case 5:
        const speciesCard = <SpeciesCard speciesData={objectData} />;
        return <DefaultCard cardData={speciesCard} />;
      case 6:
        const palnetCard = <PlanetCard planetData={objectData} />;
        return <DefaultCard cardData={palnetCard} />;
      default:
        const error = <div>Oh no! an error has occured!</div>;
        return <DefaultCard cardData={error} />;
    }
  }

  return (
    <div className={"gameContainer"}>
      <div>
        <Button
          sx={{
            backgroundColor: "black",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "gray",
            },
          }}
          variant={"contained"}
          startIcon={<SportsEsportsIcon />}
          endIcon={<ArrowForwardIcon />}
          onClick={handleOnClick}
        >
          Generate a trivia card!
        </Button>
      </div>
      <span className={"cardLocation"}>
        {state && objectData && callCard()}
      </span>
    </div>
  );
};
