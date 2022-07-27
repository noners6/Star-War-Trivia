import axios, { AxiosResponse } from "axios";

// Make a request for a user with a given ID
const getStarWarsData = async (
  category: string,
  entry: string
): Promise<AxiosResponse> =>
  axios
    .get("https://swapi.dev/api/" + category + "/" + entry + "/?format=json")
    .then(function (response: AxiosResponse) {
      // handle success
      console.log("response from API", response);
      console.log("category, entry", category, entry);
      return response;
    })
    .catch(function (error: AxiosResponse) {
      // handle error
      console.log("error!", error);
      return error;
    });

export { getStarWarsData };
