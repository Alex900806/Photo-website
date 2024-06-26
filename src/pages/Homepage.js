import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import config from "../components/config";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");

  // pexels API
  const auth = config.PEXELS_AUTH;
  const initialURL = "https://api.pexels.com/v1/curated?&page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  // fetch data from pexels api
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
    setCurrentSearch(input);
  };

  // load more pictures
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?&page=${page}&per_page=12`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page}`;
    }

    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };

  // fetch data when the pages load up
  useEffect(() => {
    search(initialURL);
  }, []);

  // 當按下 search 時，會讓 currentSearch 改變
  useEffect(() => {
    if (currentSearch === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch, searchURL]);

  return (
    <div>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>

      <div className="morePicture">
        <button onClick={morePicture}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
