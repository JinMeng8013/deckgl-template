import { DeckGL } from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { ScatterplotLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import { apitoken } from "../utils";
import { heatmapProps, scatterplotProps } from "./layers";

export const BaseMap = ({ layers, initialViewState }) => {
  return (
    <DeckGL
      controller={true}
      initialViewState={initialViewState}
      layers={layers}
    >
      <StaticMap
        reuseMaps
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={apitoken}
      />
    </DeckGL>
  );
};
