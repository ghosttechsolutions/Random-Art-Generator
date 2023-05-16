"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Fractional Bricks is a collection of NFTs inspired by a desire for a store of value and utility in the community. Fractional Bricks has been built by a passionate team and a powerful bottom up community that started with no art focusing solely around our innovation. The project offers incredible utility and a real world store of assets. Come find out why everyone loves being a BrickHead!";
const baseUri = "ipfs://QmV6WhLbsZrGEhTni3s2JFwJe2ZzW54dShAAZ3HarVx9Zf";

const layerConfigurations = [
  // The groweditionsizeto must increase on the subsequential objects
  // Can apply a blending mode or opacity per layer by adding {name: ---, blend: Mode.---} 
  {
    growEditionSizeTo: 1,
    layersOrder: [
      { name: "OneofOneYellowBrickRoad" },
      { name: "OneofOneGoldBrick" },
      { name: "OneofOneMustardTee" },
      { name: "UtilityRank" },
    ],
  },
  {
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "BrickMansion" },
      { name: "OneofTwoCokeBrick" },
      { name: "HodlJacket" },
      { name: "MasonicChain" },
      { name: "UtilityRank" },
    ],
  },
  {
    growEditionSizeTo: 9998,
    layersOrder: [
      { name: "Background" },
      { name: "backgroundAccessories" },
      { name: "Heads" },
      { name: "Tattooed"},
      { name: "FaceAccessories" },
      { name: "Body" },
      { name: "BodyAccessories" },
      { name: "Chains" },
      { name: "UtilityRank" },
    ],
  },
  {
    growEditionSizeTo: 9999,
    layersOrder: [
      { name: "OneofOneMugshot" },
      { name: "OneofTwoCokeBrick" },
      { name: "OneofOneJumpsuit" },
      { name: "UtilityRank" },
    ],
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "OneofOnePlanet" },
      { name: "backgroundAccessories" },
      { name: "Heads" },
      { name: "Tattooed"},
      { name: "FaceAccessories" },
      { name: "Body" },
      { name: "BodyAccessories" },
      { name: "Chains" },
      { name: "UtilityRank" },
    ],
  },
];

//Turn on with multiple objects to shuffle the object instead of going in chronological order
const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {
  founder: "cryptoBrickz AKA whiteboyBricks",
  developer:"babySasuke",
  artist: "yeo",
};



const rarityDelimiter = "#";

const uniqueDnaTorrance = 100000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
