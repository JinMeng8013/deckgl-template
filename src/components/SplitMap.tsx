import { DeckGL } from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { ScatterplotLayer } from "@deck.gl/layers";
import { useState, useCallback } from "react";
import { MapView } from "@deck.gl/core";
import { StaticMap } from "react-map-gl";

import { initialViewState, apitoken } from "../utils";
import { scatterplotProps, heatmapProps } from "./layers";

export const SplitMap = () => {
  const leftView = {
    id: "left",
    controller: true,
    width: "49%"
  };
  const rightView = {
    id: "right",
    controller: true,
    x: "51%",
    width: "49%"
  };

  const [viewStates, setViewStates] = useState({
    left: initialViewState,
    right: initialViewState
  });

  const onViewStateChange = useCallback(({ viewId, viewState }) => {
    if (viewId === "left") {
      setViewStates((currentViewStates) => ({
        left: viewState,
        right: {
          ...currentViewStates.right,
          longitude: viewState.longitude,
          latitude: viewState.latitude,
          bearing: viewState.bearing,
          zoom: viewState.zoom,
          pitch: viewState.pitch
        }
      }));
    } else {
      setViewStates((currentViewStates) => ({
        right: viewState,
        left: {
          ...currentViewStates.left,
          longitude: viewState.longitude,
          latitude: viewState.latitude,
          bearing: viewState.bearing,
          zoom: viewState.zoom,
          pitch: viewState.pitch
        }
      }));
    }
  }, []);

  function layerFilter({ layer, viewport }) {
    if (viewport.id === "left" && layer.id.indexOf("rides") > -1) return true;
    if (viewport.id === "right" && layer.id.indexOf("census") > -1) return true;
    return false;
  }

  return (
    <DeckGL
      layerFilter={layerFilter}
      layers={[
        new HeatmapLayer(heatmapProps),
        new ScatterplotLayer(scatterplotProps)
      ]}
      initialViewState={initialViewState}
      viewState={viewStates}
      onViewStateChange={onViewStateChange}
    >
      <MapView {...leftView}>
        <StaticMap
          reuseMaps
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxApiAccessToken={apitoken}
        />
      </MapView>
      <MapView {...rightView}>
        <StaticMap
          reuseMaps
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxApiAccessToken={apitoken}
        />
      </MapView>
    </DeckGL>
  );
};
