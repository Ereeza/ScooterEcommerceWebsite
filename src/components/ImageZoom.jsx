import React, { useState } from "react";
import "../styles/imageZoom.scss"; // You'll create this CSS file for styling

const ImageZoom = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-zoom-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="Zoomed Image" className="zoomed-image" />
    </div>
  );
};

export default ImageZoom;
