import {HttpMethods} from './htppMethods';
import {endpoints} from './endpoints';
import {oauth} from './configurations';
import {TestConfig} from '../../data/testConfig';
import {IOauthResponse} from '../../types/api/iOauthResponse';

export class Oauth {
    public static async getToken(): Promise<IOauthResponse> {
        return (await HttpMethods.postForToken(endpoints.oauth, oauth.requestBody(TestConfig.getUsername(), TestConfig.getPassword()))).data;
    }
}
