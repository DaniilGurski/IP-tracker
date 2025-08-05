import { useAtomValue } from "jotai";
import IpTrackerContainer from "./components/IpTrackerContainer";
import { ipAddressCoordsAtom, ipAddressValueAtom } from "./atoms";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function App() {
  const ipAddressValue = useAtomValue(ipAddressValueAtom);
  const ipAddressCoords = useAtomValue(ipAddressCoordsAtom);

  return (
    <main className="font-primary">
      <IpTrackerContainer />

      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </main>
  );
}
