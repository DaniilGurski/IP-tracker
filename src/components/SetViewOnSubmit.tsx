import { ipAddressCoordsAtom } from "@/atoms";
import { useAtomValue } from "jotai";
import { useMap } from "react-leaflet";

export default function SetViewOnSubmit() {
  const ipAddressCoords = useAtomValue(ipAddressCoordsAtom);
  const map = useMap();
  map.setView(ipAddressCoords, map.getZoom());

  return null;
}
