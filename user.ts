import { TOKEN_TYPE } from "./token";

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