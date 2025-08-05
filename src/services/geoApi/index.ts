import axios from "axios";
import type { GeoApiResponse } from "./types";

export const getCountryGeoInformation = async (
  address: string,
): Promise<GeoApiResponse> => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}&ipAddress=${address}`,
  );
  console.log("success", res);
  return res.data;
};
