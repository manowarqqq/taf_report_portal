import {HttpMethods} from './api/htppMethods';
import {endpoints} from './api/endpoints';

export class FiltersService {
    public static async getPermittedFilters(token?: string) {
        return await HttpMethods.getWithAuthRequest(endpoints.filters.base, token);
    }

    public static async createUserFilter(filterName: string, description: string, launchName: string) {
        return await HttpMethods.postWithAuthRequest(endpoints.filters.base, {
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
        return await HttpMethods.deleteWithAuthRequest(endpoints.filters.deleteFilter(id));
    }
}
