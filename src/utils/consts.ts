export const manhattan = {
  longitude: -74,
  latitude: 40.7,
  zoom: 11
};

export const london = {
  longitude: 0,
  latitude: 51.5,
  zoom: 9
};

export const initialViewState = {
  ...manhattan,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

// {
//   altitude: 1.5,
//   bearing: 0,
//   latitude: 0,
//   longitude: 0,
//   minZoom: 2,
//   maxZoom: 15,
//   pitch: 0,
//   zoom: 3
// };
export const apitoken =
  "pk.eyJ1IjoiZGF2aWRjYWxob3VuIiwiYSI6ImNraXlxaW8wMTB4MXIyeG02aDZzbnBxcmkifQ.OOxFfzUTBphTe1wEZqhjnw";

const DATA_URI = "https://raw.githubusercontent.com/visgl/deck.gl-data/master";
// data from deck.gl heatmap example
export const pickupUrl = `${DATA_URI}/examples/screen-grid/uber-pickup-locations.json`; // eslint-disable-line
// data from deck.gl scatterplot example
export const censusUrl = `${DATA_URI}/examples/scatterplot/manhattan.json`; // eslint-disable-line
// data from deck.gl hexagon example
export const ukRoadSafetyUrl = `${DATA_URI}/examples/3d-heatmap/heatmap-data.csv`;

export const maleColor: DataPoint = [0, 128, 255];
export const femaleColor: DataPoint = [255, 0, 128];

export type DataPoint = [number, number, number];
