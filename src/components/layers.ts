import {
  pickupUrl,
  censusUrl,
  maleColor,
  femaleColor,
  DataPoint
} from "../utils";

export const scatterplotProps = {
  id: "census",
  data: censusUrl,
  radiusMinPixels: 0.25,
  getRadius: 1,
  radiusScale: 30,
  getFillColor: (d: DataPoint) => (d[2] === 1 ? maleColor : femaleColor),
  getPosition: (d: DataPoint) => {
    return [d[0] as number, d[1] as number, 0] as DataPoint;
  }
};

export const heatmapProps = {
  id: "rides",
  data: pickupUrl,
  pickable: false,
  getPosition: (d: DataPoint) => [d[0], d[1]],
  getWeight: (d: DataPoint) => d[2],
  radiusPixesl: 30,
  intensity: 1,
  threshold: 0.03
};
