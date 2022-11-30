export enum TOKEN_TYPE {
    GOOGLE = "ggToken",
    ACCESS = "accessToken",
    REFRESH = "refreshToken"
}

export const ACCESS_TOKEN_MAX_AGE = 3600; // 60 * 60
export const REFRESH_TOKEN_MAX_AGE = 604800; // 7 * 24 * 60 * 60