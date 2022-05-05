import { DeckGL } from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { ScatterplotLayer } from "@deck.gl/layers";

import { StaticMap } from "react-map-gl";
import { Grid } from "@material-ui/core";
import { useState, useCallback } from "react";

import { initialViewState, apitoken } from "../utils";
import { scatterplotProps, heatmapProps } from "./layers";
export const TwoDecks = () => {
  const [viewState, setViewState] = useState(initialViewState);

  const onViewStateChange = useCallback(({ viewId, viewState }) => {
    setViewState(viewState);
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={6} id="left-map">
          <div className="map-wrapper">
            <DeckGL
              layers={[new HeatmapLayer(heatmapProps)]}
              controller={true}
              viewState={viewState}
              onViewStateChange={onViewStateChange}
            >
              <StaticMap
                reuseMaps
                mapStyle="mapbox://styles/mapbox/light-v10"
                mapboxApiAccessToken={apitoken}
              />
            </DeckGL>
          </div>
        </Grid>
        <Grid item xs={6} id="right-map">
          <div className="map-wrapper">
            <DeckGL
              layers={[new ScatterplotLayer(scatterplotProps)]}
              controller={true}
              viewState={viewState}
              onViewStateChange={onViewStateChange}
            >
              <StaticMap
                reuseMaps
                mapStyle="mapbox://styles/mapbox/light-v10"
                mapboxApiAccessToken={apitoken}
              />
            </DeckGL>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
