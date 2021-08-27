export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Placelocation extends Coordinates {
  address: string;
  staticImageUrl: string;
}
