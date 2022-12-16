const assert = <T>(el: T) => el;

export type TStatusResponse = {
    statusCode: number,
    msg: string,
}

export const MGMT_STATUS = {
    TARGET_ADDED: assert<TStatusResponse>({
        statusCode: 10,
        msg: "Target added successfully",
    }),
    TARGET_MOVED_TO_TRASH: assert<TStatusResponse>({
        statusCode: 11,
        msg: "Target moved to trash successfully",
    }),
    TARGET_DELETED: assert<TStatusResponse>({
        statusCode: 12,
        msg: "Target deleted successfully",
    }),
    TARGET_INVAVLID_URL: assert<TStatusResponse>({
        statusCode: -11,
        msg: "Invalid URL for target",
    }),
    TARGET_ADD_FAILED: assert<TStatusResponse>({
        statusCode: -12,
        msg: "Target failed to add",
    }),
    TARGET_INVALID_ID: assert<TStatusResponse>({
        statusCode: -13,
        msg: "Invalid ID for target",
    }),
    TARGET_FIND_FAILED: assert<TStatusResponse>({
        statusCode: -14,
        msg: "Target failed to find",
    }),
    TARGET_DELETE_FAILED: assert<TStatusResponse>({
        statusCode: -15,
        msg: "Target failed to delete",
    }),
    TARGET_NAME_DUPLICATE: assert<TStatusResponse>({
        statusCode: -16,
        msg: "Target name already exist",
    }),
};

export const SCAN_STATUS = {
    SESSION_INITIALIZE_SUCCEED: assert<TStatusResponse>({
        statusCode: 90,
        msg: "Scan session initialize succeed!",
    }),
    SESSION_INITIALIZE_FAIL: assert<TStatusResponse>({
        statusCode: -91,
        msg: "Scan session initialize fail!",
    }),
    INVAVLID_URL: assert<TStatusResponse>({
        statusCode: -92,
        msg: "Invalid URL!",
    }),
    INVALID_SESSION: assert<TStatusResponse>({
        statusCode: -93,
        msg: "Invalid scan session!",
    }),
    ZAP_SPIDER_INITIALIZE_FAIL: assert<TStatusResponse>({
        statusCode: -94,
        msg: "ZAP spider initialize fail!",
    }),
    ZAP_INTERNAL_ERROR: assert<TStatusResponse>({
        statusCode: -95,
        msg: "ZAP internal error!",
    }),
    INVALID_ID: assert<TStatusResponse>({
        statusCode: -96,
        msg: "Invalid scan id!",
    }),
    INVALID_RESULT_OFFSET: assert<TStatusResponse>({
        statusCode: -97,
        msg: "Invalid scan result offset!",
    }),
    INVALID_ID_OR_ZAP_INTERNAL_ERROR: assert<TStatusResponse>({
        statusCode: -98,
        msg: "Invalid scan id or ZAP internal error!",
    }),
};

export const LOGIN_STATUS = {
    LOGIN_SUCCESS: assert<TStatusResponse>({
        statusCode: 0,
        msg: "Login successfully"
    }),
    TOKEN_NOT_FOUND: assert<TStatusResponse>({
        statusCode: -1,
        msg: "No token found",
    }),
    TOKEN_INVALID: assert<TStatusResponse>({
        statusCode: -2,
        msg: "Invalid token",
    }),
    USER_ADD_FAILED: assert<TStatusResponse>({
        statusCode: -3,
        msg: "New user failed to add",
    }),
    USER_ALREADY_LINKED: assert<TStatusResponse>({
        statusCode: -4,
        msg: "Google account already used with different email",
    }),
    EMAIL_ALREADY_USED: assert<TStatusResponse>({
        statusCode: -5,
        msg: "Email already used",
    }),
};