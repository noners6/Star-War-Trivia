import { Typography } from "@mui/material";
import _ from "lodash";
import React, { ReactElement } from "react";
import "../cards-css/vehicleCard.css";
import ButtonPopover from "../PopoverButton";

interface VehicleCardProps {
  vehicleData: any;
}

const VehicleCard = (props: VehicleCardProps): ReactElement => {
  const model = _.get(props.vehicleData, "model");
  const maxSpeed = _.get(props.vehicleData, "max_atmosphering_speed");
  const manufacturer = _.get(props.vehicleData, "manufacturer");
  const passengers = _.get(props.vehicleData, "passengers");
  const vehicleName = _.get(props.vehicleData, "name");

  return (
    <div className={"vehicleBackground"}>
      <Typography component={"div"} color={"black"}>
        <div className={"vehicleBoxContainer"}>
          <span className={"vehicleCategoryText"}>Card Type: Vehicle</span>

          <div className={"vehicleTextContainer"}>
            <span className={"vehicleText"}>{model && "Model: "}</span>
            <span className={"vehicleDataText"}>{model}</span>
          </div>

          <div className={"vehicleTextContainer"}>
            <span className={"vehicleText"}>{maxSpeed && "Max Speed:"}</span>
            <span className={"vehicleDataText"}>{maxSpeed}</span>
          </div>

          <div className={"vehicleTextContainer"}>
            <span className={"vehicleText"}>
              {manufacturer && "Manufacturer:"}
            </span>
            <span className={"vehicleDataText"}>{manufacturer}</span>
          </div>

          <div className={"vehicleTextContainer"}>
            <span className={"vehicleText"}>{passengers && "Passengers:"}</span>
            <span className={"vehicleDataText"}>{passengers}</span>
          </div>
        </div>
      </Typography>
      <ButtonPopover answer={vehicleName} />
    </div>
  );
};

export default VehicleCard;
