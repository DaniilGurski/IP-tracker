import { type GeoApiErrorResponse } from "./types";

export const isGeoApiErrorResponse = (
  error: unknown,
): error is GeoApiErrorResponse => {
  if (
    error !== null &&
    typeof error === "object" &&
    Object.hasOwn(error, "messages")
  ) {
    return true;
  }
  return false;
};
