import { Coordinates } from './coordinates.model';

export class Location {
  id: number;
  coord: Coordinates;

  rc: string;
  location: string;
  type: string;
  use: string;
  surface: number;
  yoc: number;
}
