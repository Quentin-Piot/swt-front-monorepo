import config from "../config/config";

export interface ClientInterface {
    getJson<T>(path: string, customHeaders?: HeadersInit): Promise<T>;

    postJson<T, U>(
        path: string,
        body: T,
        customHeaders?: HeadersInit
    ): Promise<U>;
}

export default class Client implements ClientInterface {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    static initClient(): Client {
        if (!config.apiUrl) throw new Error("API URL is not defined");
        return new Client(config.apiUrl);
    }

    public getJson<T>(path: string, customHeaders?: HeadersInit): Promise<T> {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        return this.get(path, { ...headers, ...customHeaders }).then(
            (response) => response.json()
        );
    }

    public postJson<T, U>(
        path: string,
        body: T,
        customHeaders?: HeadersInit
    ): Promise<U> {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        return this.post(path, body, { ...headers, ...customHeaders }).then(
            (response) => response.json()
        );
    }

    private get(path: string, customHeaders?: HeadersInit): Promise<Response> {
        const token = localStorage.getItem("swt-user-token");
        const defaultHeaders: HeadersInit = {
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
        };
        const params: RequestInit = {
            method: "GET",
            credentials: "same-origin",
            headers: { ...defaultHeaders, ...customHeaders },
        };

        return fetch(`${this.baseUrl}${path}`, params);
    }

    private post<T>(
        path: string,
        body: T,
        customHeaders?: HeadersInit
    ): Promise<Response> {
        const token = localStorage.getItem("swt-user-token");
        const defaultHeaders: HeadersInit = {
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
        };
        const params: RequestInit = {
            method: "POST",
            credentials: "same-origin",
            headers: { ...defaultHeaders, ...customHeaders },
            body: JSON.stringify(body),
        };
        return fetch(`${this.baseUrl}${path}`, params);
    }
}
export const client = Client.initClient();
