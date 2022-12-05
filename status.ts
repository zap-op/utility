export const MGMT_STATUS = {
    TARGET_ADDED: {
        statusCode: 0,
        msg: "Target added successfully",
    },
    TARGET_DELETEED: {
        statusCode: 1,
        msg: "Target deleted successfully",
    },
    TARGET_INVAVLID_URL: {
        statusCode: -1,
        msg: "Invalid URL for target",
    },
    TARGET_ADD_FAILED: {
        statusCode: -2,
        msg: "Target failed to add",
    },
    TARGET_INVALID_ID: {
        statusCode: -3,
        msg: "Invalid ID for target",
    },
    TARGET_FIND_FAILED: {
        statusCode: -4,
        msg: "Target failed to find",
    },
    TARGET_DELETE_FAILED: {
        statusCode: -5,
        msg: "Target failed to delete",
    },
    TARGET_NAME_DUPLICATE: {
        statusCode: -6,
        msg: "Target name already exist",
    }
};

export const SCAN_STATUS = {
    SESSION_INITIALIZE_SUCCEED: {
        statusCode: 0,
        msg: "Scan session initialize succeed!",
    },
    SESSION_INITIALIZE_FAIL: {
        statusCode: -1,
        msg: "Scan session initialize fail!",
    },
    INVAVLID_URL: {
        statusCode: -2,
        msg: "Invalid URL!",
    },
    INVALID_SESSION: {
        statusCode: -3,
        msg: "Invalid scan session!",
    },

    ZAP_SPIDER_INITIALIZE_FAIL: {
        statusCode: -4,
        msg: "ZAP spider initialize fail!",
    },
};

export const LOGIN_STATUS = {
    LOGIN_SUCCESS: {
        statusCode: 0,
        msg: "Login successfully"
    },
    TOKEN_NOT_FOUND: {
        statusCode: -1,
        msg: "No token found",
    },
    TOKEN_INVALID: {
        statusCode: -2,
        msg: "Invalid token",
    },
    USER_ADD_FAILED: {
        statusCode: -3,
        msg: "New user failed to add",
    },
    USER_ALREADY_LINKED: {
        statusCode: -4,
        msg: "Google account already used with different email",
    },
    EMAIL_ALREADY_USED: {
        statusCode: -5,
        msg: "Email already used",
    }
};