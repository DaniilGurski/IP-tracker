# IP tracker

The IP Tracker app using the IP geolocation API and LeafletJS.

## Project hightlights

- Leaflet map

## Leaflet map

To make working with **LeafletJS** easier, I used **React Leaflet**. The leaflet map component consists of four layers: **MapContainer**, **TileLayer**, **Marker**, and **Popup** (not used in this project). Tilelayer is the map tiles themselves, and **OpenStreetMap** is used for them. This is a free resource, but make sure to comply with the **Tile Usage Policy**. React Leaflet helps with this through properties such as **attribution**.

**Useful resources:**:

- [LeafletJS Docs](https://leafletjs.com/reference.html)
- [React Leaflet Docs](https://react-leaflet.js.org/)
- [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/)
- [React Leaflet Tutorial for Beginners (2023)](https://www.youtube.com/watch?v=jD6813wGdBA&t=751s)

### Dynamic change of the map center

In the MapContainer component, the center property is **immutable**. The only way to change it is to use the useMap hook, but that is only available to components inside MapContainer. In my case, I needed to change the map view separately from the MapContainer. I found an interesting solution to this problem demonstrated in one CodeSandbox project. The trick is to create a special component (**SetViewOnSubmit.tsx**) that accepts state (or simply reads the value of jotai atom), and pass it to the setView method. This way, I was able to change the state independently of MapContainer and dynamically change the map view.

**SetViewOnSubmit.tsx**:

```js
import { ipAddressCoordsAtom } from "@/atoms";
import { useAtomValue } from "jotai";
import { useMap } from "react-leaflet";

export default function SetViewOnSubmit() {
  const ipAddressCoords = useAtomValue(ipAddressCoordsAtom);
  const map = useMap();
  map.setView(ipAddressCoords, map.getZoom());

  return null;
}
```

**Note:** I think that in this project, I didn't even need to create a state, but simply read the location coordinates from the data obtained from useQuery(), as I did with the error object (as in the IpInfoContainerPlaceholder component).

**Useful resources:**:

- [How to change center dynamically in React-Leaflet v.3.x](https://codesandbox.io/p/sandbox/how-to-change-center-dynamically-in-react-leaflet-v3x-d8rn7?file=%2Fsrc%2FMapComp.jsx)
