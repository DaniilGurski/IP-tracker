import type { GeoApiResponse } from "@/services/geoApi/types";
import Loader from "@components/Loader";

type IpInfoContainerProps = {
  info: GeoApiResponse | undefined;
  isFetching: boolean;
};

export default function IpInfoContainer({
  info,
  isFetching,
}: IpInfoContainerProps) {
  if (isFetching) {
    return <Loader />;
  }

  if (!info) {
    return <IpInfoContainerPlaceholder />;
  }

  const { ip, location, isp } = info;

  return (
    <div className="absolute inset-x-0 top-full z-[1000] grid -translate-y-1/2 grid-cols-1 gap-x-4 divide-gray-300 rounded-lg bg-white p-4 text-center md:grid-cols-4 md:divide-x-2 md:p-7 md:text-start">
      <div className="">
        <p className="text-sm font-medium text-gray-500"> IP ADDRESS </p>
        <span className="text-lg font-medium">{ip}</span>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-500"> LOCATION </p>
        <span className="text-lg font-medium">{location.country}</span>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-500"> TIMEZONE </p>
        <span className="text-lg font-medium">{location.timezone}</span>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-500"> ISP </p>
        <span className="text-lg font-medium">{isp}</span>
      </div>
    </div>
  );
}

export function IpInfoContainerPlaceholder() {
  return (
    <div className="absolute inset-x-0 top-full z-[1000] grid -translate-y-1/2 grid-cols-1 gap-x-4 divide-gray-300 rounded-lg bg-white p-4 text-center md:grid-cols-4 md:divide-x-2 md:p-7 md:text-start">
      <div className="">
        <p className="text-sm font-medium text-gray-500"> IP ADDRESS </p>
        <span className="text-lg font-medium">*</span>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-500"> LOCATION </p>
        <span className="text-lg font-medium">*</span>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-500"> TIMEZONE </p>
        <span className="text-lg font-medium">*</span>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-500"> ISP </p>
        <span className="text-lg font-medium">*</span>
      </div>
    </div>
  );
}
