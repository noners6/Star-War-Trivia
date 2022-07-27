import { Typography } from "@mui/material";
import _ from "lodash";
import React, { ReactElement } from "react";
import "../cards-css/speciesCard.css";

interface SpeciesCardProps {
  speciesData: any;
}

const SpeciesCard = (props: SpeciesCardProps): ReactElement => {
  const classification = _.get(props.speciesData, "classification");
  const averageLifespan = _.get(props.speciesData, "averageLifespan");
  const designation = _.get(props.speciesData, "desgination");
  const skinColor = _.get(props.speciesData, "skin_color");

  return (
    <div className={"speciesBackground"}>
      <Typography component={"div"} color={"black"}>
        <span className={"speciesCategoryText"}>Card Type: Species</span>

        <div className={"speciesTextContainer"}>
          <span className={"speciesText"}>
            {classification && "Classification:"}
          </span>
          <span className={"speciesDataText"}>{classification}</span>
        </div>

        <div className={"peciesTextContainer"}>
          <span className={"speciesText"}>{skinColor && "Skin Color:"}</span>
          <span className={"speciesDataText"}>{skinColor}</span>
        </div>

        <div className={"peciesTextContainer"}>
          <span className={"speciesText"}>
            {averageLifespan && "Average Lifespan: " + averageLifespan}
          </span>
          <span className={"speciesDataText"}>{averageLifespan}</span>
        </div>

        <div className={"peciesTextContainer"}>
          <span className={"speciesText"}>
            {designation && "Designation: : " + designation}
          </span>
          <span className={"speciesDataText"}>{designation}</span>
        </div>
      </Typography>
    </div>
  );
};

export default SpeciesCard;
