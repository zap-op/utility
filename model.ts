import { ObjectId } from "bson";

export type TObject = {
	_id: ObjectId;
	updatedAt?: string;
	createdAt?: string;
};

export type TObjectWithoutUpdate = Omit<TObject, "updatedAt">;

//TARGET
export type TTarget = {
	name: string;
	target: string;
	tag?: string[];
};

export type TTargetModel = Required<TObject> &
	TTarget & {
		userId: ObjectId;
	};

export type TUser = {
	sub: string;
	email: string;
	emailVerified: boolean;
	name: string;
	picture: string;
	givenName: string;
	familyName: string;
};

export type TUserModel = TObject & TUser;

export type TScanSession = {
	url: string;
	userId: ObjectId;
	targetId: ObjectId;
};

export type TZapSpiderScanFullResults = {
	fullResults: {
		urlsInScope: any[];
		urlsOutOfScope: any[];
		urlsIoError: any[];
	};
};

export type TZapAjaxScanFullResults = TZapSpiderScanFullResults;

export type TZapSpiderScanConfig = {
	scanConfig: {
		maxChildren?: number;
		recurse?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapSpiderScanSessionModel = TObject &
	TScanSession &
	TZapSpiderScanConfig &
	TZapSpiderScanFullResults;

export type TZapAjaxScanConfig = {
	scanConfig: {
		inScope?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapAjaxScanSessionModel = TObject & 
	TScanSession & 
	TZapAjaxScanConfig & 
	TZapAjaxScanFullResults;
