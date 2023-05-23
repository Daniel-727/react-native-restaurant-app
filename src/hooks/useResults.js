import { useEffect, useState } from "react";
import yelp from "../api/yelp";

// For default exports, you can name it whatever you want, for example in SearchScreen, this unnamed module is imported as useResults
export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    /* console.log("hi"); */
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san francisco",
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("something went wrong");
    }
  };

  // useEffect runs a function only once if we pass in an empty array argument
  useEffect(() => {
    searchApi("chocolate");
  }, []);

  // Returning the variables we need in SearchScreen
  return [results, error, searchApi];
};
