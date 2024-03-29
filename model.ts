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
		isDeleted: boolean;
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

export type TScanFullResults = {
	sessionPop: ObjectId;
};

export enum RiskLevel {
	HIGH = "High",
	MEDIUM = "Medium",
	LOW = "Low",
	INFORMATIONAL = "Informational",
}

export type TBaseUrlResult = {
	statusReason: string;
	method: string;
	url: string;
	statusCode: string;
};

export type TAlertDetail = {
	sourceid: string;
	other: string;
	method: string;
	evidence: string;
	pluginId: string;
	cweid: string;
	confidence: string;
	wascid: string;
	description: string;
	messageId: string;
	inputVector: string;
	url: string;
	tags: Record<string, string>;
	reference: string;
	solution: string;
	alert: string;
	param: string;
	attack: string;
	name: string;
	risk: string;
	id: string;
	alertRef: string;
};

export type TAlertCountsByRisk = {
	high: number;
	medium: number;
	low: number;
	informational: number;
};

export type TRisk = {
	key: string;
	value: {
		param: string;
		confidence: string;
		name: string;
		risk: string;
		id: string;
		url: string;
	}[];
};

export type TAlertsByRisk = Partial<Record<RiskLevel, TRisk[]>>;

//------------------------------------------------SPIDER-------------------------------------------------

export type TZapSpiderScanConfig = {
	scanConfig: {
		maxChildren?: number;
		recurse?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
	};
};

export type TZapSpiderScanSessionModel = TObject & TScanSession & TZapSpiderScanConfig;

export type TZapSpiderUrlInScope = TBaseUrlResult & {
	processed: string;
	reasonNotProcessed: string;
	messageId: string;
};

export type TZapSpiderScanFullResults = TScanFullResults & {
	fullResults: {
		urlsInScope: TZapSpiderUrlInScope[];
		urlsOutOfScope: string[];
		urlsIoError: any[];
	};
};

export type TZapSpiderScanFullResultsModel = TObject & TZapSpiderScanFullResults;

//------------------------------------------------AJAX-------------------------------------------------

export type TZapAjaxStreamStatus = "running" | "stopped";

export type TZapAjaxScanConfig = {
	scanConfig: {
		inScope?: boolean;
		contextName?: string;
		subtreeOnly?: boolean;
		maxCrawlDepth?: number;
		maxDuration?: number;
	};
};

export type TZapAjaxScanSessionModel = TObject & TScanSession & TZapAjaxScanConfig;

export type TZapAjaxUrlResult = TBaseUrlResult & {
	messageId: string; //as number
};

export type TZapAjaxScanFullResults = TScanFullResults & {
	fullResults: {
		inScope: TZapAjaxUrlResult[];
		outOfScope: TZapAjaxUrlResult[];
		errors: any[];
	};
};

export type TZapAjaxScanFullResultsModel = TObject & TZapAjaxScanFullResults;

//------------------------------------------------PASSIVE-------------------------------------------------

export type TZapPassiveStreamStatus = "running" | "stopped";

export type TZapPassiveStreamStatusRaw = {
	status: string | TZapPassiveStreamStatus | "explored";
	recordsToScan?: string;
};

export type TZapPassiveScanConfig = {
	exploreType: "spider" | "ajax";
	spiderConfig?: TZapSpiderScanConfig["scanConfig"];
	ajaxConfig?: TZapAjaxScanConfig["scanConfig"];
};

export type TZapPassiveScanSessionModel = TObject & TScanSession & TZapPassiveScanConfig;

export type TZapPassiveScanFullResults = TScanFullResults & {
	fullResults: {
		alertsByRisk: TAlertsByRisk;
		alerts: TAlertDetail[];
	};
};

export type TZapPassiveScanFullResultsModel = TObject & TZapPassiveScanFullResults;

//------------------------------------------------ACTIVE-------------------------------------------------

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

export type TZapActiveScanFullResults = TScanFullResults & {
	fullResults: {
		alertsByRisk: TAlertsByRisk;
		alerts: TAlertDetail[];
	};
};

export type TZapActiveScanFullResultsModel = TObject & TZapActiveScanFullResults;
