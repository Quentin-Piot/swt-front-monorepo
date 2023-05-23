import { Trip } from "./trip";

export type User = {
    email: string;
    trips: Trip[];
    selectedTripId?: number;
};
