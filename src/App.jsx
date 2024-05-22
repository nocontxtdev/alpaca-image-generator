// src/App.jsx
import React, { useState } from "react";
import AlpacaPreview from "./components/AlpacaPreview";
import CustomizationPanel from "./components/CustomizationPanel";
import RandomizeButton from "./components/RandomizeButton";
import DownloadButton from "./components/DownloadButton";
import { getRandomFeature } from "./utils/getRandomFeature";
import "./index.css";

const initialLayers = [
  { name: "Background", src: "/assets/backgrounds/darkblue50.png", zIndex: 1 },
  { name: "Ears", src: "/assets/ears/default.png", zIndex: 2 },
  { name: "Neck", src: "/assets/neck/default.png", zIndex: 3 },
  { name: "Leg", src: "/assets/leg/default.png", zIndex: 3 },
  { name: "Nose", src: "/assets/nose.png", zIndex: 4 },
  { name: "Hair", src: "/assets/hair/default.png", zIndex: 4 },
  { name: "Accessory", src: "/assets/accessories/earings.png", zIndex: 5 },
  { name: "Eyes", src: "/assets/eyes/default.png", zIndex: 5 },
  { name: "Mouth", src: "/assets/mouth/default.png", zIndex: 5 },
];

const options = [
  {
    name: "Accessory",
    items: [
      { name: "Earings", src: "/assets/accessories/earings.png" },
      { name: "Flower", src: "/assets/accessories/flower.png" },
      { name: "Glasses", src: "/assets/accessories/glasses.png" },
      { name: "Headphone", src: "/assets/accessories/headphone.png" },
    ],
  },
  {
    name: "Background",
    items: [
      { name: "Blue50", src: "/assets/backgrounds/blue50.png" },
      { name: "Blue60", src: "/assets/backgrounds/blue60.png" },
      { name: "Blue70", src: "/assets/backgrounds/blue70.png" },
      { name: "DarkBlue30", src: "/assets/backgrounds/darkblue30.png" },
      { name: "DarkBlue50", src: "/assets/backgrounds/darkblue50.png" },
      { name: "DarkBlue70", src: "/assets/backgrounds/darkblue70.png" },
      { name: "Green50", src: "/assets/backgrounds/green50.png" },
      { name: "Green60", src: "/assets/backgrounds/green60.png" },
      { name: "Green70", src: "/assets/backgrounds/green70.png" },
      { name: "Grey40", src: "/assets/backgrounds/grey40.png" },
      { name: "Grey70", src: "/assets/backgrounds/grey70.png" },
      { name: "Grey80", src: "/assets/backgrounds/grey80.png" },
      { name: "Red50", src: "/assets/backgrounds/red50.png" },
      { name: "Red60", src: "/assets/backgrounds/red60.png" },
      { name: "Red70", src: "/assets/backgrounds/red70.png" },
      { name: "Yellow50", src: "/assets/backgrounds/yellow50.png" },
      { name: "Yellow60", src: "/assets/backgrounds/yellow60.png" },
      { name: "Yellow70", src: "/assets/backgrounds/yellow70.png" },
    ],
  },
  {
    name: "Ears",
    items: [
      { name: "Default", src: "/assets/ears/default.png" },
      { name: "Tilt Backward", src: "/assets/ears/tilt-backward.png" },
      { name: "Tilt Forward", src: "/assets/ears/tilt-forward.png" },
    ],
  },
  {
    name: "Eyes",
    items: [
      { name: "Angry", src: "/assets/eyes/angry.png" },
      { name: "Default", src: "/assets/eyes/default.png" },
      { name: "Naughty", src: "/assets/eyes/naughty.png" },
      { name: "Panda", src: "/assets/eyes/panda.png" },
      { name: "Smart", src: "/assets/eyes/smart.png" },
      { name: "Star", src: "/assets/eyes/star.png" },
    ],
  },
  {
    name: "Hair",
    items: [
      { name: "Bang", src: "/assets/hair/bang.png" },
      { name: "Curls", src: "/assets/hair/curls.png" },
      { name: "Default", src: "/assets/hair/default.png" },
      { name: "Elegant", src: "/assets/hair/elegant.png" },
      { name: "Fancy", src: "/assets/hair/fancy.png" },
      { name: "Quiff", src: "/assets/hair/quiff.png" },
      { name: "Short", src: "/assets/hair/short.png" },
    ],
  },
  {
    name: "Leg",
    items: [
      { name: "Bubble Tea", src: "/assets/leg/bubble-tea.png" },
      { name: "Cookie", src: "/assets/leg/cookie.png" },
      { name: "Default", src: "/assets/leg/default.png" },
      { name: "Game Console", src: "/assets/leg/game-console.png" },
      { name: "Tilt Backward", src: "/assets/leg/tilt-backward.png" },
      { name: "Tilt Forward", src: "/assets/leg/tilt-forward.png" },
    ],
  },
  {
    name: "Mouth",
    items: [
      { name: "Astonished", src: "/assets/mouth/astonished.png" },
      { name: "Default", src: "/assets/mouth/default.png" },
      { name: "Eating", src: "/assets/mouth/eating.png" },
      { name: "Laugh", src: "/assets/mouth/laugh.png" },
      { name: "Tongue", src: "/assets/mouth/tongue.png" },
    ],
  },
  {
    name: "Neck",
    items: [
      { name: "Default", src: "/assets/neck/default.png" },
      { name: "Bend Backward", src: "/assets/neck/bend-backward.png" },
      { name: "Bend Forward", src: "/assets/neck/bend-forward.png" },
      { name: "Thick Neck", src: "/assets/neck/thick.png" },
    ],
  },
];

const App = () => {
  const [layers, setLayers] = useState(initialLayers);
  const [selectedFeatureType, setSelectedFeatureType] = useState("Accessory");

  const handleOptionSelect = (featureType, src) => {
    setLayers((prevLayers) =>
      prevLayers.map((layer) =>
        layer.name === featureType ? { ...layer, src } : layer
      )
    );
  };

  const randomizeAlpaca = () => {
    const newLayers = options.map((layer) => ({
      name: layer.name,
      src: getRandomFeature(layer.name, options),
    }));
    newLayers.push({ name: "Nose", src: "/assets/nose.png" });
    setLayers(newLayers);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Alpaca Generator</h1>
      </header>
      <div className="app-content">
        <div className="preview-section">
          <AlpacaPreview layers={layers} />
          <div className="preview-buttons">
            <RandomizeButton randomizeAlpaca={randomizeAlpaca} />
            <DownloadButton />
          </div>
        </div>
        <div className="options-section">
          <CustomizationPanel
            options={options}
            layers={layers}
            onOptionSelect={handleOptionSelect}
            selectedFeatureType={selectedFeatureType}
            setSelectedFeatureType={setSelectedFeatureType}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
