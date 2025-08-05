type GeoLocation = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
};

type AsInfo = {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
};

export type GeoApiResponse = {
  ip: string;
  location: GeoLocation;
  domains: string[];
  as: AsInfo;
  isp: string;
};

export type GeoApiErrorResponse = {
  code: number;
  messages: string;
};
