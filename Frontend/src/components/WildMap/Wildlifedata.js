// src/components/WildMap/Wildlifedata.js

import L from "leaflet";

// Animal icons based on species
const getAnimalIcon = (url) =>
  new L.Icon({
    iconUrl: url,
    iconSize: [30, 30],
  });

export const endangeredSpeciesAreas = [
  {
    name: "Tiger Reserve (Critical)",
    position: [22.4158, 80.5755],
    level: "red",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/3065/3065741.png"
    ), // 🐯 Tiger
  },
  {
    name: "Elephant Corridor (Endangered)",
    position: [18.8899, 82.7779],
    level: "blue",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/3069/3069224.png"
    ), // 🐘 Elephant
  },
  {
    name: "Snow Leopard Habitat (Vulnerable)",
    position: [34.1526, 77.577],
    level: "green",
    icon: getAnimalIcon(
      "https://png.pngtree.com/png-vector/20230901/ourmid/pngtree-cartoon-head-of-snow-leopard-with-green-eyes-vector-png-image_7047174.png"
    ), // Snow Leopard - reused icon
  },
  {
    name: "Great Indian Bustard Area (Critical)",
    position: [27.1584, 71.7763],
    level: "red",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/141/141762.png"
    ), // 🦅 Bird icon
  },
  {
    name: "Olive Ridley Nesting Beach",
    position: [19.8833, 85.8333],
    level: "blue",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/4971/4971915.png"
    ), // 🐢 Turtle
  },
  {
    name: "Red Panda Range",
    position: [27.3306, 88.6065],
    level: "green",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/8372/8372043.png"
    ), // Panda-style icon
  },
  {
    name: "Asiatic Lion Reserve",
    position: [21.124, 70.8242],
    level: "blue",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/616/616412.png"
    ), // 🦁 Lion
  },
  {
    name: "Blackbuck Sanctuary",
    position: [22.7239, 71.6551],
    level: "green",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/2223/2223053.png"
    ), // 🦌 Deer-like
  },
  {
    name: "Gangetic Dolphin Stretch",
    position: [25.5941, 85.1376],
    level: "red",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/2931/2931499.png"
    ), // 🐬 Dolphin
  },
  {
    name: "Vulture Nesting Cliff",
    position: [24.4796, 78.597],
    level: "blue",
    icon: getAnimalIcon(
      "https://cdn-icons-png.flaticon.com/512/141/141762.png"
    ), // 🦅 Bird reused
  },
];

// Biodiverse places with color-coded markers
export const biodiversePlaces = [
  {
    name: "Tropical Rainforest Reserve",
    position: [10.0, 74.0],
    iconColor: "red",
  },
  {
    name: "Coral Reef Zone",
    position: [12.0, 80.0],
    iconColor: "blue",
  },
  {
    name: "Mangrove Forest",
    position: [13.5, 75.0],
    iconColor: "green",
  },
];
