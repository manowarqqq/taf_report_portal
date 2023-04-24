import {logger} from "../utils/logger/logger";
import ElementHelper from "../helpers/elementHelpers";
export default class Page {
    baseUrl = "http://google.com";


    async open(url: string): Promise<void> {
        await logger.info(`Opening the url "${url}"`);
        await ElementHelper.navigateTo(url);
        }

    async reload(): Promise<void> {
        const currentUrl = ElementHelper.getUrl();
        await logger.info(`Reloading page with url "${currentUrl}"`);
        await ElementHelper.refresh();
        }
}
