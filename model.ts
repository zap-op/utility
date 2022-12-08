import {ObjectId} from "bson";

export const TAG_TARGET: string = "TARGET";
export type TTarget = {
    userId: ObjectId,
    name: string,
    target: string,
    tag?: string[]
};

export const TAG_USER: string = "USER";
export type TUser = {
    sub: string,
    email: string,
    emailVerified: boolean,
    name: string,
    picture: string,
    givenName: string,
    familyName: string
};

export const TAG_SCAN_SESSION: string = "SCAN_SESSION";
export type TScanSession = {
    url: string,
    userId: ObjectId
};

export const TAG_ZAP_SPIDER_SCAN_SESSION: string = "ZAP_SPIDER_SCAN_SESSION";
export type TZapSpiderScanSession = {
    scanConfig: {
        maxChildren?: number,
        recurse?: boolean,
        contextName?: string,
        subtreeOnly?: boolean
    }
};