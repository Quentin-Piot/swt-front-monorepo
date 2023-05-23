import { Node } from "@/common/models/node";
import Client from "@/services/client";

export type NodeInput = {
    title: string;
    description?: string;
    country_code: string;
    city: string;
    trip: number;
    latitude: number;
    longitude: number;
};

type NodeResponse = {
    nodes: Node[];
};

export const createNode = async (
    client: Client,
    node: NodeInput
): Promise<Node> => {
    return client.postJson<NodeInput, Node>("/nodes", node);
};

export const getNodesForTripId = async (
    client: Client,
    id: number
): Promise<Node[]> => {
    return client
        .getJson<NodeResponse>("/nodes/trip/" + id)
        .then((response) => {
            return response.nodes;
        });
};
