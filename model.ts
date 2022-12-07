import {ObjectId} from "bson";

export type TTarget = {
    userId: ObjectId,
    name: string,
    target: string,
    tag?: string[]
};

export type TUser = {
    sub: string,
    email: string,
    emailVerified: boolean,
    name: string,
    picture: string,
    givenName: string,
    familyName: string
};

export type TScanSession = {
    url: string,
    userId: ObjectId
};

export type TZapSpiderScanSession = {
    scanConfig: {
        maxChildren?: number,
        recurse?: boolean,
        contextName?: string,
        subtreeOnly?: boolean
    }
};