import { useCallback, useRef, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "510px",
  display: "block",
  margin: "0 auto",
  borderRadius: "10px",
};

const center = {
  lat: -22.994334767008134,
  lng: -43.40274489130152,
};

export const ContactUsMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtgCIWLSEqC3E_zhp7P2hxMeeqJ8ROhI8",
  });

  const [map, setMap] = useState(null);
  const circleRef = useRef<any>(null);
  const mapRef = useRef();

  const loadHandler = (map: any) => {
    mapRef.current = map;
  };

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={loadHandler}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
        <Circle
          ref={circleRef}
          center={center}
          radius={1000}
          options={{ fillColor: "#EE80AE33", strokeColor: "#EE80AE66" }}
          draggable={true}
        />
      </>
    </GoogleMap>
  ) : (
    <>{map}</>
  );
};
