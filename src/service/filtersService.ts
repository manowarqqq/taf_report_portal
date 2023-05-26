import {Oauth} from './api/oauth';
import {HttpMethods} from './api/htppMethods';
import {endpoints} from './api/endpoints';

export class FiltersService {
    public static async getPermittedFilters(token?: string) {
        if (token === undefined) {
            token = (await Oauth.getToken()).access_token;
        }
        return await HttpMethods.getWithAuthRequest(endpoints.filters.base, token);
    }

    public static async createUserFilter(filterName: string, description: string, launchName: string) {
        const token = await Oauth.getToken();
        return await HttpMethods.postWithAuthRequest(endpoints.filters.base, token.access_token, {
            conditions: [
                {
                    value: launchName,
                    condition: 'eq',
                    filteringField: 'name',
                },
            ],
            type: 'launch',
            orders: [
                {
                    isAsc: false,
                    sortingColumn: 'startTime',
                },
                {
                    isAsc: false,
                    sortingColumn: 'number',
                },
            ],
            name: filterName,
            owner: 'default',
            description: description,
        });
    }

    public static async deleteFilterById(id: number) {
        const token = await Oauth.getToken();

        return await HttpMethods.deleteWithAuthRequest(endpoints.filters.deleteFilter(id), token.access_token);
    }
}
