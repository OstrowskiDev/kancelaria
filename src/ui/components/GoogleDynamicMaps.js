import { useCallback, useState } from "react"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"
import Image from "next/image"

const containerStyle = {
  width: "100%",
  maxWidth: "756px",
  minWidth: "300px",
  height: "496px",
  borderTop: "2px solid #CCB083",
  borderBottom: "1px solid #2C334C",
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
    //prevent the default info window from opening when clicking on the POI
    map.addListener("click", function (event) {
      if (event.placeId) {
        event.stop()
      }
    })
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
        zoomControl: true, // zoom control
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "on" }],
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
          <div className="kancelaria-poi-container w-[280px] h-[160px]">
            <p className="uppercase font-semibold">Kancelarie Adwokackie</p>
            <div className="image-container relative w-[200px] h-32">
              {/* <Image
                src="zapraszamy.jpg"
                alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz. Zapraszają do współpracy."

                style={{ objectFit: "cover", objectPosition: "65% 10%" }}
                fill={true}
              /> */}
            </div>

            <p>Adwokat Judyta Ciesielska</p>
            <p>Adwokat Katarzyna Markiewicz</p>
            <p className="italic">ul. Franciszkańska 1/1,</p>
            <p className="italic">62-200 Gniezno</p>
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
