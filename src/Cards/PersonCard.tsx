import _ from "lodash";
import { ReactElement } from "react";

interface PersonCardProps {
  personData: any;
}
const PersonCard = (props: PersonCardProps): ReactElement => {
  const birthYear = _.get(props.personData, "birth_year");
  const hairColor = _.get(props.personData, "hair_color");
  const gender = _.get(props.personData, "gender");

  console.log("birthYear, hairColor", birthYear, hairColor);
  return <div>{birthYear + " " + hairColor + " " + gender}</div>;
};

export default PersonCard;
