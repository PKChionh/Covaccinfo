import React, { useState } from "react";
import ReactMapGL, { Marker, Popup} from 'react-map-gl';
import * as vaccSite from "./Covid_Vacc_Locations.json"

function MapView() {
  const [viewport, setViewport] = React.useState({
    latitude: 40.716927, 
    longitude: -74.051140,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <ReactMapGL 
      {...viewport}
        mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
        onViewportChange={viewport => { setViewport(viewport); }}      
        mapStyle="mapbox://styles/mapbox/light-v9"
      >

      {vaccSite.features.map(site => (
        <Marker
          key={site.attributes.OBJECTID}
          latitude={site.geometry[1]}
          longitude={site.geometry[0]}

        >
          <button
            className="marker-btn"
            onClick={e => {
              e.preventDefault();
              setSelectedSite(site);
            }}
          >

            <img src="/blood-bank-11.svg" alt="Vaccination Site" />
            
          </button>
        </Marker>
      ))}

      {selectedSite ? (
        <Popup
          latitude={selectedSite.geometry[1]}
          longitude={selectedSite.geometry[0]}

          onClose={() => { setSelectedSite(null); }}
        >
          <div>
            <h6>{selectedSite.attributes.name}</h6>
            <p>{selectedSite.attributes.fulladdr}</p>
          </div>
        </Popup>
      ) : null}

    </ReactMapGL>
  );
}

export default MapView;
