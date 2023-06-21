import { ObjectId } from "bson";
import { TStatusResponse } from "./status";
import {
	TTarget, //
	TObject,
	TScanSessionModel,
	TZapAjaxScanConfig,
	TZapAjaxStreamStatus,
	TZapSpiderScanConfig,
	TZapSpiderScanFullResultsModel,
	TZapAjaxScanFullResultsModel,
	TZapActiveScanConfig,
	TZapActiveScanFullResultsModel,
	TZapPassiveScanConfig,
	TZapPassiveScanFullResultsModel,
} from "./model";

export enum HTTPMethod {
	GET,
	POST,
}
export type TGET = HTTPMethod.GET;
export type TPOST = HTTPMethod.POST;

export type TErrorInjected = {
	error: TStatusResponse;
};

export type TLoginResponse = TStatusResponse;

export type TAuthScanSession = Pick<TScanSessionModel, "_id" | "zapScanId" | "zapClientId">;

export type TZapAjaxFullResultsConfig = {
	inScope: number;
	outOfScope: number;
	errors: number;
};

// /management/scanSessions
/**
 * Request - GET - /management/scanSessions
 */
export type TMgmtScanSessionsResponse = (Omit<TScanSessionModel, "targetPop"> & {
	targetPop: TTarget;
})[];

// TRIAL

// /scan/trial
/**
 * Request - GET - /scan/trial
 */
export type TZapSpiderTrialGETRequest = Pick<TTarget, "target">;

/**
 * Response - GET - /scan/trial
 */
export type TZapSpiderTrialGETResponse = {
	data: string[];
	progress: number;
	isScanning: boolean;
} & TErrorInjected;

// /scan/trial/results
/**
 * Request - GET - /scan/trial/results
 */
export type TZapSpiderTrialResultsGETRequest = {
	scanId: string; // number as string
	offset: string; // number as string
};

/**
 * Response - GET - /scan/trial/results
 */
export type TZapSpiderTrialResultsGETResponse = string[];

//------------------------------------------------SPIDER-------------------------------------------------

// /scan/zap/spider
/**
 * Request - GET | POST - /scan/zap/spider
 */
export type TZapSpiderRequest<T extends TGET | TPOST> = T extends TGET
	? Omit<TAuthScanSession, "zapClientId"> //
	: T extends TPOST
	? Pick<TObject, "_id"> & TZapSpiderScanConfig
	: undefined;

/**
 * Response - GET | POST - /scan/zap/spider
 */
export type TZapSpiderResponse<T extends TGET | TPOST> = T extends TGET
	? TZapSpiderTrialGETResponse //
	: T extends TPOST
	? TStatusResponse
	: undefined;

// /scan/zap/spider/results
/**
 * Request - GET - /scan/zap/spider/results
 */
export type TZapSpiderResultsGETRequest = TZapSpiderTrialResultsGETRequest;

/**
 * Response - GET - /scan/zap/spider/results
 */
export type TZapSpiderResultsGETResponse = TZapSpiderTrialResultsGETResponse;

export type TZapSpiderFullResultsParams = {
	urlsInScopeOffset: number;
	urlsOutOfScopeOffset: number;
	urlsIoErrorOffset: number;
};

// /scan/zap/spider/fullResults
/**
 * Request - GET - /scan/zap/spider/fullResults
 */
export type TZapSpiderFullResultsGETRequest = Pick<TAuthScanSession, "_id">;

/**
 * Response - GET - /scan/zap/spider/fullResults
 */
export type TZapSpiderFullResultsGETResponse = TZapSpiderScanFullResultsModel;

//------------------------------------------------AJAX-------------------------------------------------

export type TZapAjaxGETResponse = {
	data: string[];
	progress: "initializing" | TZapAjaxStreamStatus;
	isScanning: boolean;
} & TErrorInjected;

// /scan/zap/ajax
/**
 * Request - GET | POST - /scan/zap/ajax
 */
export type TZapAjaxRequest<T extends TGET | TPOST> = T extends TGET
	? TAuthScanSession //
	: T extends TPOST
	? Pick<TObject, "_id"> & TZapAjaxScanConfig
	: undefined;

/**
 * Response - GET | POST - /scan/zap/ajax
 */
export type TZapAjaxResponse<T extends TGET | TPOST> = T extends TGET
	? TZapAjaxGETResponse //
	: T extends TPOST
	? TStatusResponse
	: undefined;

// /scan/zap/ajax/results
/**
 * Request - GET - /scan/zap/ajax/results
 */
export type TZapAjaxResultsGETRequest = TZapSpiderTrialResultsGETRequest;

/**
 * Response - GET - /scan/zap/ajax/results
 */
export type TZapAjaxResultsGETResponse = TZapSpiderTrialResultsGETResponse;

// /scan/zap/ajax/fullResults
/**
 * Request - GET - /scan/zap/ajax/fullResults
 */
export type TZapAjaxFullResultsParams = {
	inScope: number;
	outOfScope: number;
	errors: number;
};

export type TZapAjaxFullResultGETRequest = Pick<TAuthScanSession, "_id">;

/**
 * Response - GET - /scan/zap/ajax/fullResults
 */
export type TZapAjaxFullResultsGETResponse = TZapAjaxScanFullResultsModel;

//------------------------------------------------PASSIVE-------------------------------------------------

export type TZapPassiveGETResponse = {
	data: string[];
	progress: number;
	isScanning: boolean;
} & TErrorInjected;

// /scan/zap/passive
/**
 * Request - GET | POST - /scan/zap/passive
 */
export type TZapPassiveRequest<T extends TGET | TPOST> = T extends TGET
	? TAuthScanSession //
	: T extends TPOST
	? Pick<TObject, "_id"> & TZapPassiveScanConfig
	: undefined;

/**
 * Response - GET | POST - /scan/zap/passive
 */
export type TZapPassiveResponse<T extends TGET | TPOST> = T extends TGET
	? TZapPassiveGETResponse //
	: T extends TPOST
	? TStatusResponse
	: undefined;

// /scan/zap/passive/fullResults
/**
 * Request - GET - /scan/zap/passive/fullResults
 */
export type TZapPassiveFullResultGETRequest = Pick<TAuthScanSession, "_id">;

/**
 * Response - GET - /scan/zap/passive/fullResults
 */
export type TZapPassiveFullResultsGETResponse = TZapPassiveScanFullResultsModel;

//------------------------------------------------ACTIVE-------------------------------------------------

export type TZapActiveGETResponse = {
	data: string[];
	progress: number;
	isScanning: boolean;
} & TErrorInjected;

// /scan/zap/active
/**
 * Request - GET | POST - /scan/zap/active
 */
export type TZapActiveRequest<T extends TGET | TPOST> = T extends TGET
	? TAuthScanSession //
	: T extends TPOST
	? Pick<TObject, "_id"> & TZapActiveScanConfig
	: undefined;

/**
 * Response - GET | POST - /scan/zap/active
 */
export type TZapActiveResponse<T extends TGET | TPOST> = T extends TGET
	? TZapActiveGETResponse //
	: T extends TPOST
	? TStatusResponse
	: undefined;

// /scan/zap/active/results
/**
 * Request - GET - /scan/zap/active/results
 */
export type TZapActiveResultsGETRequest = any;

/**
 * Response - GET - /scan/zap/active/results
 */
export type TZapActiveResultsGETResponse = any;

// /scan/zap/active/fullResults
/**
 * Request - GET - /scan/zap/active/fullResults
 */
export type TZapActiveFullResultGETRequest = Pick<TAuthScanSession, "_id">;

/**
 * Response - GET - /scan/zap/active/fullResults
 */
export type TZapActiveFullResultsGETResponse = TZapActiveScanFullResultsModel;
