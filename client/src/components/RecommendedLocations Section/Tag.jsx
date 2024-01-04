import React from "react";

const Tag = ({ tag, handleCategoryClick }) => {
  return (
    <div className="tag" onClick={() => handleCategoryClick(tag)}>
      {tag}
    </div>
  );
};

export default Tag;
