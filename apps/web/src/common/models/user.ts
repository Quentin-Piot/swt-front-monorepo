import { Trip } from "@/common/models/trip";

export type User = {
    email: string;
    trips: Trip[];
    selectedTripId: number | null;
};
