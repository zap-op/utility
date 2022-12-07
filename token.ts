export enum TOKEN_TYPE {
    GOOGLE = "ggToken",
    ACCESS = "accessToken",
    REFRESH = "refreshToken"
}

export const ACCESS_TOKEN_MAX_AGE = 3600000; // 60 * 60 * 1000
export const REFRESH_TOKEN_MAX_AGE = 604800000; // 7 * 24 * 60 * 60 * 1000