import {logger} from '../utils/logger/logger';
import ElementHelper from '../helpers/elementHelpers';
import WindowHelper from '../helpers/windowHelper';
import {TestConfig} from '../data/testConfig';
export default class BasePage {
    async open(): Promise<void> {
        await logger.info(`Opening the url "${TestConfig.getBaseUrl()}"`);
        await WindowHelper.navigateTo(TestConfig.getBaseUrl());
    }

    async reload(): Promise<void> {
        const currentUrl = ElementHelper.getUrl();
        await logger.info(`Reloading page with url "${currentUrl}"`);
        await WindowHelper.refresh();
    }
}
