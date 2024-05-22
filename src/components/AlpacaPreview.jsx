// src/components/AlpacaPreview.jsx

import React, { useEffect, useRef } from "react";

const AlpacaPreview = ({ layers }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    layers.forEach((layer) => {
      const existingImage = container.querySelector(`.${layer.name}`);
      if (existingImage) {
        existingImage.src = layer.src;
      } else {
        const img = new Image();
        img.className = layer.name;
        img.src = layer.src;
        img.style.position = "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.zIndex = layer.zIndex;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        container.appendChild(img);
      }
    });

    // Remove any excess images
    const existingImages = container.querySelectorAll("img");
    existingImages.forEach((img) => {
      if (!layers.find((layer) => layer.name === img.className)) {
        container.removeChild(img);
      }
    });
  }, [layers]);

  return (
    <div
      className="alpaca-preview"
      id="alpaca-container"
      ref={containerRef}
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default AlpacaPreview;
