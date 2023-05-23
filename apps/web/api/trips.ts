import { Trip } from "@/common/models/trip";
import Client from "@/services/client";

export type TripsResponse = {
    trips: Trip[];
};

export const getTrips = async (client: Client): Promise<Trip[]> => {
    return client
        .getJson<TripsResponse>("/trips/me")
        .then((response) => response.trips);
};
