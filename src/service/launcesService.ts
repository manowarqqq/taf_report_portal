import {HttpMethods} from './api/htppMethods';
import {endpoints} from './api/endpoints';
import {logger} from '../utils/logger/logger';

export class LaunchesService {
    public static async getLaucnhes() {
        const response = await HttpMethods.getWithAuthRequest(endpoints.launches.getLaunches);

        if (response && response.data && response.data) {
            logger.info('Got list of launches');
        } else {
            logger.error(`Failed request with  ${response.status} status`);
        }
        return response;
    }

    public static async getNamesOfLaunches() {
        let arr = (await this.getLaucnhes()).data.content;
        return arr.map((e: any) => e.name);
    }
}
