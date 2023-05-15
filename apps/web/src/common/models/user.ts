import { Team } from "@/common/models/team";

export type User = {
    email: string;
    teams: Team[];
    selectedTeamId: number;
};
