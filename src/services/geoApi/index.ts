import axios from "axios";
import type { GeoApiResponse } from "@services/geoApi/types";

export const getCountryGeoInformation = async (
  address: string,
): Promise<GeoApiResponse> => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEO_API_KEY}&ipAddress=${address}&domain=${address}`,
  );
  console.log("success", res.data);
  return res.data;
};
