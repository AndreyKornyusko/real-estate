export enum FiltersEnum {
  ALL="All",
  ACTIVE="Active",
  SOLD="Sold",
}

export interface Photo {
  original: string;
  thumbnail: string| null;
}

export interface VirtualTour{
  category: string;
  url: string|null;
}

export interface Address {
  streetName: string;
  streetNumber: number;
  city: string;
  county: string;
  stateOrProvince: string| null;
  postalCode: string;
  unitNumber: string | null| number;
  display: string;
}

export interface Links {
  photos: Photo[];
  virtualTours?: VirtualTour[];
}
export interface Card {
  address: Address;
  bathrooms: number;
  bedrooms: number;
  buildingAreaTotal: string;
  buildingAreaUnits: string;
  links: Links;
  listAgentFullName: string;
  listPrice: string;
  status: string;
  url: string;
  isFavorite: boolean;
  id: string;
}
