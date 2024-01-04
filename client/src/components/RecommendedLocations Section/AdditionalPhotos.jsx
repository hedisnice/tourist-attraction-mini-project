import React from "react";

const AdditionalPhotos = ({ photos, title }) => {
  return (
    <div className="additional-photos">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`${title} - Photo ${index + 2}`} />
      ))}
    </div>
  );
};

export default AdditionalPhotos;
