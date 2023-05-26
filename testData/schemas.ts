export const filtersListValidResponseSchema = {
    title: 'filters list',
    type: 'object',
    required: ['content', 'page'],
    properties: {
        content: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    owner: {
                        type: 'string',
                    },
                    share: {
                        type: ['boolean'],
                    },
                    id: {
                        type: ['number'],
                    },
                    name: {
                        type: ['string'],
                    },
                },
                required: ['id', 'name'],
            },
        },
    },
};

export const filtersListErrorResponseSchema = {
    title: 'filters list error',
    type: 'object',
    required: ['error', 'error_description'],
    properties: {
        error: {
            type: 'string',
        },
        error_description: {
            type: 'string',
        },
    },
};

export const createFilterValidResponseSchema = {
    title: 'create filter',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'number',
        },
    },
};

export const createFilterErrorResponseSchema = {
    title: 'create filter error response',
    type: 'object',
    required: ['errorCode', 'message'],
    properties: {
        errorCode: {
            type: 'number',
        },
        message: {
            type: 'string',
        },
    },
};

export const deleteFilterValidResponseSchema = {
    title: 'delete filter',
    type: 'object',
    required: ['message'],
    properties: {
        message: {
            type: 'string',
        },
    },
};

export const deleteFilterErrorResponseSchema = {
    title: 'delete filter',
    type: 'object',
    required: ['errorCode', 'message'],
    properties: {
        errorCode: {
            type: 'number',
        },
        message: {
            type: 'string',
        },
    },
};
