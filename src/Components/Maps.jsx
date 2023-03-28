import React, { useEffect, useRef } from "react";

function Maps() {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);
  return <div ref={mapRef} style={{ width: 800, height: 600 }}></div>;
}

export default Maps;
