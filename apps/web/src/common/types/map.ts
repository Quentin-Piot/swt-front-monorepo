import { LatLngExpression } from "leaflet";

export type MapNode = {
    id: number;
    description?: string;
    location: LatLngExpression;
};
