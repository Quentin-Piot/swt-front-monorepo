import Client from "@/services/client";
import { Team } from "@/common/models/team";

export type TeamsResponse = {
    teams: Team[];
};

export const getTeams = async (client: Client): Promise<Team[]> => {
    return client
        .getJson<TeamsResponse>("/teams/me")
        .then((response) => response.teams);
};
