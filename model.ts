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
	status: {
		state: ScanState;
		message: string;
	};
	zapClientId: string;
	zapScanId: string;
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

export type TZapSpiderScanSessionModel = TObject & TScanSession & TZapSpiderScanConfig;

export type TZapAjaxStreamStatus = "running" | "stopped";

export type TZapAjaxScanConfig = {
	scanConfig: {
		inScope?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapAjaxScanSessionModel = TObject & TScanSession & TZapAjaxScanConfig;

export type TZapPassiveScanConfig = {
	exploreType: "spider" | "ajax";
	spiderConfig?: TZapSpiderScanConfig["scanConfig"];
	ajaxConfig?: TZapAjaxScanConfig["scanConfig"];
};

export type TZapPassiveScanSessionModel = TObject & TScanSession & TZapPassiveScanConfig;

export type TZapActiveScanConfig = {
	exploreType: "spider" | "ajax";
	spiderConfig?: TZapSpiderScanConfig["scanConfig"];
	ajaxConfig?: TZapAjaxScanConfig["scanConfig"];
	scanConfig: {
		recurse?: boolean;
		inScopeOnly?: boolean;
		scanPolicyName?: string;
		method?: string;
		postData?: string;
		contextId?: string;
	};
};

export type TZapActiveScanSessionModel = TObject & TScanSession & TZapActiveScanConfig;

export type TScanFullResults = {
	sessionId: ObjectId;
};

export type TZapSpiderScanFullResults = TScanFullResults & {
	fullResults: {
		urlsInScope: any[];
		urlsOutOfScope: any[];
		urlsError: any[];
	};
};

export type TZapAjaxScanFullResults = TScanFullResults & {
	fullResults: {
		urlsInScope: any[];
		urlsOutOfScope: any[];
		urlsError: any[];
	};
};

export type TZapPassiveScanFullResults = TScanFullResults & {
	fullResults: {
		data: any[];
	};
};

export type TZapActiveScanFullResults = TScanFullResults & {
	fullResults: {
		data: any[];
	};
};

export type TZapSpiderScanFullResultsModel = TObject & TZapSpiderScanFullResults;

export type TZapAjaxScanFullResultsModel = TObject & TZapAjaxScanFullResults;

export type TZapPassiveScanFullResultsModel = TObject & TZapPassiveScanFullResults;

export type TZapActiveScanFullResultsModel = TObject & TZapActiveScanFullResults;
