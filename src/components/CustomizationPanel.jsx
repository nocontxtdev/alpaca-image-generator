// src/components/CustomizationPanel.jsx
import { useState } from "react";

const CustomizationPanel = ({
  options,
  layers,
  onOptionSelect,
  selectedFeatureType,
  setSelectedFeatureType,
}) => {
  const getActiveItemSrc = (featureType) => {
    const layer = layers.find((layer) => layer.name === featureType);
    return layer ? layer.src : null;
  };

  return (
    <>
      <div className="options-buttons">
        <h3>Accessorise the Alpaca's</h3>
        {options.map((option) => (
          <button
            key={option.name}
            className={`rounded-button ${
              selectedFeatureType === option.name ? "active" : ""
            }`}
            onClick={() => setSelectedFeatureType(option.name)}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="options-buttons">
        <h3>Style</h3>
        {options
          .find((option) => option.name === selectedFeatureType)
          ?.items.map((item) => (
            <button
              key={item.name}
              className={`rounded-button ${
                getActiveItemSrc(selectedFeatureType) === item.src
                  ? "active"
                  : ""
              }`}
              onClick={() => onOptionSelect(selectedFeatureType, item.src)}
            >
              {item.name}
            </button>
          ))}
      </div>
    </>
  );
};

export default CustomizationPanel;
