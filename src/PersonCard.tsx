import _ from "lodash";
import { ReactElement, useEffect, useState } from "react";
import { getData } from "./data/api";

interface PersonCardProps {
  personNumber: number;
}
const PersonCard = (props: PersonCardProps): ReactElement => {
  const [data, setData] = useState([]);
  const [birthYear, setBirthYear] = useState([]);
  const [hairColor, setHairColor] = useState([]);

  useEffect(() => {
    getData("people", props.personNumber.toString()).then((data: any) => {
      setData(data);

      setBirthYear(_.get(objectData, "birth_year"));
      setHairColor(_.get(objectData, "hair_color"));
    });
  }, []);

  const key: string = "data";

  const objectData = data[key as keyof never[]];

  console.log("birthYear, hairColor", birthYear, hairColor);
  return <div>{birthYear + " " + hairColor}</div>;
};

export default PersonCard;
