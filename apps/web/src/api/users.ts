import Client from "@/services/client";
import { User } from "@/common/models/user";

export type AuthorizationResponse = {
    callback_url: string;
};
export const getCallbackUrl = async (client: Client): Promise<string> => {
    return client
        .getJson<AuthorizationResponse>("/auth")
        .then((response) => response.callback_url);
};

export const getUser = async (client: Client): Promise<User> => {
    return client.getJson<User>("/users/me");
};
