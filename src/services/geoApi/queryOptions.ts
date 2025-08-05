import { getCountryGeoInformation } from "@/services/geoApi/index";
import { queryOptions } from "@tanstack/react-query";

export const getCountryGeoInformationQueryOptions = (ipAddressValue: string) =>
  queryOptions({
    queryKey: ["country", ipAddressValue],
    queryFn: () => getCountryGeoInformation(ipAddressValue),
    refetchOnWindowFocus: false,
  });
