// src/components/RandomizeButton.jsx
const RandomizeButton = ({ randomizeAlpaca }) => {
  return (
    <button className="preview-button" onClick={randomizeAlpaca}>
      Randomize
    </button>
  );
};

export default RandomizeButton;
