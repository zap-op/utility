export enum TOKEN_TYPE {
    GOOGLE = "ggToken",
    ACCESS = "accessToken",
    REFRESH = "refreshToken"
}

export const ACCESS_TOKEN_MAX_AGE = 3600000; // 60 * 60 * 1000
export const REFRESH_TOKEN_MAX_AGE = 604800000; // 7 * 24 * 60 * 60 * 1000

export interface JwtPayload {
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: string | string[] | undefined;
    exp?: number | undefined;
    nbf?: number | undefined;
    iat?: number | undefined;
    jti?: string | undefined;
}

export interface GgUserData {
    sub: string,
    email?: string,
    emailVerified?: boolean,
    name?: string,
    picture?: string,
    givenName?: string,
    familyName?: string
}

export type UserTokenData = JwtPayload & GgUserData & {
    userId: string,
    type: TOKEN_TYPE
};