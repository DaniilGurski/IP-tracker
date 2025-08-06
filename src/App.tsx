import { Icon } from "leaflet";
import iconLocation from "@assets/icon-location.svg";
import { useAtomValue } from "jotai";
import { ipAddressCoordsAtom } from "@/atoms";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import SetViewOnSubmit from "@components/SetViewOnSubmit";
import IpTrackerContainer from "@components/IpTrackerContainer";

const customMarkerIcon = new Icon({
  iconUrl: iconLocation,
  iconSize: [46, 56],
});

export default function App() {
  const ipAddressCoords = useAtomValue(ipAddressCoordsAtom);

  return (
    <main className="font-primary">
      <IpTrackerContainer />
      <MapContainer center={ipAddressCoords} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ipAddressCoords} icon={customMarkerIcon} />
        <SetViewOnSubmit />
      </MapContainer>
    </main>
  );
}
