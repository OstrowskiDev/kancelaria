import { useCallback, useState } from "react"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"

const containerStyle = {
  width: "896px",
  height: "396px",
  border: "2px solid #E6C693",
  borderRadius: "4px",
}

const center = {
  lat: 52.53629925913922,
  lng: 17.597660480445434,
}

const businessLocation = {
  lat: 52.53639425672074,
  lng: 17.59778516819433,
}

export default function GoogleDynamicMaps() {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false)
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18.2}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        mapTypeId: "roadmap", // ensures only the street map is used
        mapTypeControl: false, // disables the map type control so users can't change it
        streetViewControl: false, // disable Street View as well
        rotateControl: false, // disable rotation controls
        scaleControl: false, // disable scale control
        fullscreenControl: false, // disable fullscreen control
        zoomControl: true, // keep or remove zoom control as per your requirement
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
        ],
      }}
    >
      <Marker
        position={businessLocation}
        onClick={() => setIsInfoWindowOpen(true)}
      />

      {isInfoWindowOpen && (
        <InfoWindow
          position={businessLocation}
          onCloseClick={() => setIsInfoWindowOpen(false)}
        >
          <div>
            <h3>Kancelaria Adwokacka</h3>
            <p>Business Address</p>
          </div>
        </InfoWindow>
      )}

      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}
