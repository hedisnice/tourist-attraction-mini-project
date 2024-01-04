import React from "react";
import LocationCard from "../RecommendedLocations Section/LocationCard";

const RecommendedLocations = ({
  locations,
  handleCategoryClick,
  copyToClipboard,
  readMoreHandler,
}) => {
  return (
    <div className="recommended-locations">
      {locations.map((item) => (
        <LocationCard
          key={item.eid}
          item={item}
          handleCategoryClick={handleCategoryClick}
          copyToClipboard={copyToClipboard}
          readMoreHandler={readMoreHandler}
        />
      ))}
    </div>
  );
};

export default RecommendedLocations;
