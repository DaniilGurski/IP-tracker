import IpSearchBar from "@components/IpSearchBar";
import IpInfoContainer from "@components/IpInfoContainer";
import { useQuery } from "@tanstack/react-query";
import { getCountryGeoInformation } from "@/services/geoApi";
import { useAtomValue } from "jotai";
import { ipAddressValueAtom } from "@/atoms";

// 192.212.174.101
export default function IpTrackerContainer() {
  const ipAddressValue = useAtomValue(ipAddressValueAtom);

  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["country", ipAddressValue],
    queryFn: () => getCountryGeoInformation(ipAddressValue),
    enabled: false,
  });

  return (
    <div className="bg-[image:url(./assets/pattern-bg-mobile.png)] bg-cover bg-no-repeat pt-4 sm:bg-[image:url(./assets/pattern-bg-desktop.png)] md:pt-6">
      <div className="relative mx-auto w-[90%] max-w-5xl gap-y-4 pb-36 md:pb-28">
        <h1 className="font-primary mb-3.5 text-center text-2xl font-bold text-white">
          IP Address Tracker
        </h1>

        <IpSearchBar refetch={refetch} />

        <IpInfoContainer info={data} isFetching={isFetching} />
      </div>
    </div>
  );
}
