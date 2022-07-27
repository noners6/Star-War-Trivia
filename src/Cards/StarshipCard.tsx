import { Typography } from "@mui/material";
import _ from "lodash";
import React, { ReactElement } from "react";
import "../cards-css/starshipCard.css";

interface StarshipCardProps {
  starshipData: any;
}

const StarshipCard = (props: StarshipCardProps): ReactElement => {
  const manufacturer = _.get(props.starshipData, "manufacturer");
  const consumables = _.get(props.starshipData, "consumables");
  const crew = _.get(props.starshipData, "crew");
  const model = _.get(props.starshipData, "model");

  console.log("starship data: ", props.starshipData);

  return (
    <div className={"starshipBackground"}>
      <Typography component={"div"} color={"black"}>
        <span className={"starshipCategoryText"}>Card Type: Starship</span>

        <div className={"starshipContainer"}>
          <span className={"starshipText"}>
            {manufacturer && "Manufacturer:"}
          </span>
          <span className={"starshipDataText"}>{manufacturer}</span>
        </div>

        <div className={"starshipContainer"}>
          <span className={"starshipText"}>
            {consumables && "Consumables:"}
          </span>
          <span className={"starshipDataText"}>{consumables}</span>
        </div>

        <div className={"starshipContainer"}>
          <span className={"starshipText"}>{crew && "Crew:"}</span>
          <span className={"starshipDataText"}>{crew}</span>
        </div>

        <div className={"starshipContainer"}>
          <span className={"starshipText"}>{model && "Model:"}</span>
          <span className={"starshipDataText"}>{model}</span>
        </div>
      </Typography>
    </div>
  );
};

export default StarshipCard;
