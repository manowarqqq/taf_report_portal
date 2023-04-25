import {logger} from "../utils/logger/logger";
import ElementHelper from "../helpers/elementHelpers";
import WindowHelper from "../helpers/windowHelper";
export default class Page {
    baseUrl = "http://google.com";


    async open(url: string): Promise<void> {
        await logger.info(`Opening the url "${url}"`);
        await WindowHelper.maximizeWindow();
        await WindowHelper.navigateTo(url);
        }

    async reload(): Promise<void> {
        const currentUrl = ElementHelper.getUrl();
        await logger.info(`Reloading page with url "${currentUrl}"`);
        await WindowHelper.refresh();
        }
}
