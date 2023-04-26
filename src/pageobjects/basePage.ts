import {logger} from "../utils/logger/logger";
import ElementHelper from "../helpers/elementHelpers";
import WindowHelper from "../helpers/windowHelper";
export default class BasePage {

    static async open(url: string): Promise<void> {
        await logger.info(`Opening the url "${url}"`);
        await WindowHelper.navigateTo(url);
        }

   static async reload(): Promise<void> {
        const currentUrl = ElementHelper.getUrl();
        await logger.info(`Reloading page with url "${currentUrl}"`);
        await WindowHelper.refresh();
        }
}
