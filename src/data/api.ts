import axios, { AxiosResponse } from "axios";

export async function getData(category: string, entry: string) {
  try {
    const data = await axios.get(
      "https://swapi.dev/api/" + category + "/" + entry + "/?format=json"
    );
    return data;
  } catch {
    return null;
  }
}

// Make a request for a user with a given ID
const getStarWarsData = async (
  category: string,
  entry: string
): Promise<AxiosResponse> =>
  axios
    .get("https://swapi.dev/api/" + category + "/" + entry + "/?format=json")
    .then(function (response: AxiosResponse) {
      // handle success
      console.log("it works", response);
      return response;
    })
    .catch(function (error: AxiosResponse) {
      // handle error
      console.log("error!", error);
      return error;
    });

export { getStarWarsData };
