import { Typography } from "@mui/material";
import _ from "lodash";
import React, { ReactElement } from "react";
import "../cards-css/planetCard.css";
import ButtonPopover from "../PopoverButton";

interface PlanetCardProps {
  planetData: any;
}
const PlanetCard = (props: PlanetCardProps): ReactElement => {
  const climate = _.get(props.planetData, "climate");
  const diameter = _.get(props.planetData, "diameter");
  const gravity = _.get(props.planetData, "gravity");
  const terrain = _.get(props.planetData, "terrain");
  const population = _.get(props.planetData, "population");
  const planetName = _.get(props.planetData, "name");

  return (
    <div className={"planetBackground"}>
      <Typography component={"div"} color={"black"}>
        <div className={"vehicleBoxContainer"}>
          <span className={"planetCategoryText"}>Card Type: Planet</span>

          <div className={"planetTextContainer"}>
            <span className={"planetText"}>{climate && "Climate:"}</span>
            <span className={"planetDataText"}>{climate}</span>
          </div>

          <div className={"planetTextContainer"}>
            <span className={"planetText"}>{terrain && "Terrain:"}</span>
            <span className={"planetDataText"}>{terrain}</span>
          </div>

          <div className={"planetTextContainer"}>
            <span className={"planetText"}>{diameter && "Diameter:"}</span>
            <span className={"planetDataText"}>{diameter}</span>
          </div>

          <div className={"planetTextContainer"}>
            <span className={"planetText"}>{gravity && "Gravity:"}</span>
            <span className={"planetDataText"}>{gravity}</span>
          </div>

          <div className={"planetTextContainer"}>
            <span className={"planetText"}>{population && "Population:"}</span>
            <span className={"planetDataText"}>{population}</span>
          </div>
        </div>
      </Typography>
      <ButtonPopover answer={planetName} />
    </div>
  );
};

export default PlanetCard;
