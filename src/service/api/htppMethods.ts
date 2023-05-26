import axios from 'axios';
import {TestConfig} from '../../data/testConfig';

export class HttpMethods {
    public static async getWithAuthRequest(endpoint: string, token: string) {
        const url = TestConfig.getBaseUrl() + endpoint;

        try {
            return await axios({
                method: 'get',
                url: url,
                headers: {Authorization: `Bearer ${token}`},
            });
        } catch (err: any) {
            return err;
        }
    }

    public static async postWithAuthRequest(endpoint: string, token: string, requestBody: any) {
        const url = TestConfig.getBaseUrl() + endpoint;

        try {
            const response = await axios({
                method: 'POST',
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                data: requestBody,
                responseType: 'json',
            });
            return {
                status: response.status,
                data: response.data,
            };
        } catch (err: any) {
            return err;
        }
    }

    public static async postForToken(endpoint: string, requestBody: Record<string, string>) {
        const url = TestConfig.getBaseUrl() + endpoint;
        try {
            const formData = new URLSearchParams(requestBody);

            const response = await axios({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded', Authorization: 'Basic dWk6dWltYW4='},
                data: formData,
            });

            return response;
        } catch (err: any) {
            return err;
        }
    }

    public static async deleteWithAuthRequest(endpoint: string, token: string, requestBody?: any) {
        const url = TestConfig.getBaseUrl() + endpoint;
        let body = {
            method: 'DELETE',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            responseType: 'json',
        };

        if (requestBody) {
            body = {...body, ...{data: requestBody}};
        }
        try {
            const response = await axios(body);

            return {
                status: response.status,
                data: response.data,
            };
        } catch (err: any) {
            return err;
        }
    }
}
