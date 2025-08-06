import IpSearchBar from "@components/IpSearchBar";
import IpInfoContainer from "@components/IpInfoContainer";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { ipAddressCoordsAtom, ipAddressValueAtom } from "@/atoms";
import { useEffect, useState } from "react";
import { getCountryGeoInformationQueryOptions } from "@/services/geoApi/queryOptions";

export default function IpTrackerContainer() {
  const ipAddressValue = useAtomValue(ipAddressValueAtom);
  const setIpAddressCoords = useSetAtom(ipAddressCoordsAtom);
  const [enabled, setEnabled] = useState(true);

  const { data, isFetching, refetch } = useQuery({
    ...getCountryGeoInformationQueryOptions(ipAddressValue),
    enabled,
  });

  useEffect(() => {
    if (!data) return;
    setIpAddressCoords([data.location.lat, data.location.lng]);
  }, [data]);

  return (
    <div className="bg-[image:url(./assets/pattern-bg-mobile.png)] bg-cover bg-no-repeat pt-4 sm:bg-[image:url(./assets/pattern-bg-desktop.png)] md:pt-6">
      <div className="relative mx-auto w-[90%] max-w-5xl gap-y-4 pb-36 md:pb-28">
        <h1 className="font-primary mb-3.5 text-center text-2xl font-bold text-white">
          IP Address Tracker
        </h1>

        <IpSearchBar refetch={refetch} setEnabled={setEnabled} />

        <IpInfoContainer info={data} isFetching={isFetching} />
      </div>
    </div>
  );
}
