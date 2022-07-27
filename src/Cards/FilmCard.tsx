import { Typography } from "@mui/material";
import _ from "lodash";
import React, { ReactElement } from "react";
import "../cards-css/filmCard.css";

interface FilmCardProps {
  filmData: any;
}

const FilmCard = (props: FilmCardProps): ReactElement => {
  const director = _.get(props.filmData, "director");
  const producer = _.get(props.filmData, "prooducer");
  const releaseDate = _.get(props.filmData, "release_date");

  return (
    <div className={"filmBackground"}>
      <Typography component={"div"} color={"black"}>
        <span className={"filmCategoryText"}>Card Type: Film</span>

        <div className={"filmTextContainer"}>
          <span className={"filmText"}>{director && "Director:"}</span>
          <span className={"filmDataText"}>{director}</span>
        </div>

        <div className={"filmTextContainer"}>
          <span className={"filmText"}>{producer && "Producer:"}</span>
          <span className={"filmDataText"}>{producer}</span>
        </div>

        <div className={"filmTextContainer"}>
          <span className={"filmText"}>{releaseDate && "Release Date:"}</span>
          <span className={"filmDataText"}>{releaseDate}</span>
        </div>
      </Typography>
    </div>
  );
};

export default FilmCard;
