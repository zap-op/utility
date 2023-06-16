import { ObjectId } from "bson";
import { TStatusResponse } from "./status";
import {
	TTarget, //
	TObject,
	TScanSession,
	TScanSessionModel,
	TZapAjaxScanConfig,
	TZapAjaxStreamStatus,
	TZapSpiderScanConfig,
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

export type TAuthScanSession = {
	scanSession: ObjectId;
	scanId: string; // number as string
};

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
	targetPop: Pick<TTarget, "name" | "target">;
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

// SPIDER

// /scan/zap/spider
/**
 * Request - GET | POST - /scan/zap/spider
 */
export type TZapSpiderRequest<T extends TGET | TPOST> = T extends TGET
	? TAuthScanSession //
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
export type TZapSpiderFullResultsGETRequest = Pick<TAuthScanSession, "scanId"> & TZapSpiderFullResultsParams;

/**
 * Response - GET - /scan/zap/spider/fullResults
 */
export type TZapSpiderFullResultsGETResponse = any; // Updating...

// AJAX

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
 * Response - GET | POST - /scan/zap/spider
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

export type TZapAjaxFullResultGETRequest = Pick<TScanSession, "zapClientId"> & //
	TZapAjaxFullResultsParams;

	
/**
 * Response - GET - /scan/zap/ajax/fullResults
 */
export type TZapAjaxFullResultsGETResponse = any