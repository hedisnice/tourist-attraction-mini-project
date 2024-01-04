import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchSection from "./components/SearchSection";
import RecommendedLocations from "./components/RecommendedLocations Section/RecommendedLocations";
import AppTopic from "./components/Topic";
import "./App.css";

function App() {
  const [textFilter, setTextFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getData();
  }, [textFilter, categoryFilter]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${textFilter || ""}&category=${
          categoryFilter || ""
        }`
      );
      setLocations(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
  };

  const readMoreHandler = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCategoryClick = (tag) => {
    setTextFilter((prevTextFilter) => {
      const separator = prevTextFilter ? " " : "";
      return `${prevTextFilter}${separator}${tag}`;
    });
    setCategoryFilter(tag);
  };

  return (
    <div className="travel-app">
      <AppTopic />
      <SearchSection textFilter={textFilter} setTextFilter={setTextFilter} />
      <RecommendedLocations
        locations={locations}
        handleCategoryClick={handleCategoryClick}
        copyToClipboard={copyToClipboard}
        readMoreHandler={readMoreHandler}
      />
    </div>
  );
}

export default App;
