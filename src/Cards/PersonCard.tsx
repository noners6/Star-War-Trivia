import { Typography } from "@mui/material";
import _ from "lodash";
import React, { ReactElement } from "react";
import "../cards-css/personCard.css";

interface PersonCardProps {
  personData: any;
}
const PersonCard = (props: PersonCardProps): ReactElement => {
  const birthYear = _.get(props.personData, "birth_year");
  const hairColor = _.get(props.personData, "hair_color");
  const gender = _.get(props.personData, "gender");

  console.log("person data: ", props.personData);
  console.log("birthYear, hairColor", birthYear, hairColor);
  return (
    <div className={"personBackground"}>
      <Typography component={"div"} color={"black"}>
        <span className={"personCategoryText"}>Card Type: Person</span>

        <div className={"personTextContainer"}>
          <span className={"personText"}>{birthYear && "Birth year:"}</span>
          <span className={"personDataText"}>{birthYear}</span>
        </div>

        <div className={"personTextContainer"}>
          <span className={"personText"}>{hairColor && "Hair color:"}</span>
          <span className={"personDataText"}>{hairColor}</span>
        </div>

        <div className={"personTextContainer"}>
          <span className={"personText"}>{gender && "Gender:"}</span>
          <span className={"personDataText"}>{gender}</span>
        </div>
      </Typography>
    </div>
  );
};

export default PersonCard;
