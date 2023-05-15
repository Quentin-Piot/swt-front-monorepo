import Client from "@/services/client";
import { Node } from "@/common/models/node";

export type NodeInput = {
    title: string;
    description?: string;
    country_code: string;
    city: string;
    team: number;
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

export const getNodesForTeamId = async (
    client: Client,
    id: number
): Promise<Node[]> => {
    return client
        .getJson<NodeResponse>("/nodes/team/" + id)
        .then((response) => {
            return response.nodes;
        });
};
