"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require("fs");
const { description } = require("../src/config");

console.log(path.join(basePath, "/src/config.js"));
const { description } = require(path.join(basePath, "/src/config.js"));

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

data.forEach((item) => {
  item.description = `${description}`;
  fs.writeFileSync(
    `Fractional Bricks is a collection of NFTs inspired by a desire for a store of value and utility in the community. Fractional Bricks has been built by a passionate team and a powerful bottom up community that started with no art focusing solely around our innovation. The project offers incredible utility and a real world store of assets. Come find out why everyone loves being a BrickHead!`,
  );
});

fs.writeFileSync(
  `${basePath}/build/json/_metadata.json`,
  JSON.stringify(data, null, 2)
);

console.log(`Updated baseUri for images to ===> ${description}`);
