import { ObjectId } from "bson";
import { ScanState } from "./status";

export type TObject = {
	_id: ObjectId;
	updatedAt?: string;
	createdAt?: string;
};

export type TDiscriminator = {
	__t: string;
};

export type TObjectWithoutUpdate = Omit<TObject, "updatedAt">;

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
	userPop: ObjectId;
	targetPop: ObjectId;
	scanId: number,
	status: {
		state: ScanState;
		message: string;
	};
};

export type TScanSessionModel = Required<TObject> & //
	TDiscriminator &
	TScanSession;

export type TZapSpiderScanConfig = {
	scanConfig: {
		maxChildren?: number;
		recurse?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapSpiderScanSessionModel = TObject & //
	TScanSession &
	TZapSpiderScanConfig;

export type TZapAjaxScanConfig = {
	scanConfig: {
		inScope?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapAjaxScanSessionModel = TObject & //
	TScanSession &
	TZapAjaxScanConfig;

export type TScanFullResults = {
	sessionId: ObjectId;
};

export type TZapScanFullResults = TScanFullResults & {
	fullResults: {
		urlsInScope: any[];
		urlsOutOfScope: any[];
		urlsError: any[];
	};
};

export type TZapSpiderScanFullResultsModel = TObject & TZapScanFullResults;

export type TZapAjaxScanFullResultsModel = TObject & TZapScanFullResults;
