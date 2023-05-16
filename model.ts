import { ObjectId } from "bson";

export type TObject = {
	_id: ObjectId;
	updatedAt?: string;
	createdAt?: string;
};

export type TObjectWithoutUpdate = Omit<TObject, "updatedAt">;

export type TTarget = TObject & {
	userId: ObjectId;
	name: string;
	target: string;
	tag?: string[];
};

export type TUser = TObject & {
	sub: string;
	email: string;
	emailVerified: boolean;
	name: string;
	picture: string;
	givenName: string;
	familyName: string;
};

export type TScanSession = {
	url: string;
	userId: ObjectId;
};

export type TZapSpiderScanSession = TScanSession & {
	scanConfig: {
		maxChildren?: number;
		recurse?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapAjaxScanSession = TScanSession & {
	scanConfig: {
		inScope?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};
