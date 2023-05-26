import {TestConfig} from '../../data/testConfig';

export const endpoints = {
    oauth: '/uat/sso/oauth/token',
    filters: {
        base: `/api/v1/${TestConfig.getProject()}/filter`,
        deleteFilter: (filterId: number): string => {
            return `/api/v1/${TestConfig.getProject()}/filter/${filterId}`;
        },
    },
    launches: {
        getLaunches: `/api/v1/${TestConfig.getProject()}/launch`,
    },
};
