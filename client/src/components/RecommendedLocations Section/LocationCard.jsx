import React from "react";
import Tag from "./Tag";
import AdditionalPhotos from "../RecommendedLocations Section/AdditionalPhotos";
import CopyToClipboardIcon from "../RecommendedLocations Section/CopyToClipboardIcon";

const LocationCard = ({
  item,
  handleCategoryClick,
  copyToClipboard,
  readMoreHandler,
}) => {
  return (
    <div className="location-card" key={item.eid}>
      <img src={item.photos[0]} alt={item.title} />
      <div className="location-content">
        <div className="location-title">{item.title}</div>
        <p>
          {item.description.length > 100 && !item.expanded
            ? `${item.description.slice(0, 100)}... `
            : item.description}
          {item.description.length > 100 && (
            <a href="#" onClick={() => readMoreHandler(item.url)}>
              อ่านต่อ
            </a>
          )}
        </p>
        <div className="tags-section">
          <div>หมวด</div>
          {item.tags.map((tag, index) => (
            <Tag
              key={index}
              tag={tag}
              handleCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
        <AdditionalPhotos photos={item.photos.slice(1, 4)} title={item.title} />
        <CopyToClipboardIcon
          copyToClipboard={() => copyToClipboard(item.url)}
        />
      </div>
    </div>
  );
};

export default LocationCard;
