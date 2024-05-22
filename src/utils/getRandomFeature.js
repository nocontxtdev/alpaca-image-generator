// src/utils/getRandomFeature.js
export const getRandomFeature = (featureType, features) => {
  // Find the feature options that match the featureType
  const items = features.find((feature) => feature.name === featureType).items;

  // Generate a random index based on the length of the items array
  const randomIndex = Math.floor(Math.random() * items.length);

  // Return the source path of the randomly selected item
  return items[randomIndex].src;
};
