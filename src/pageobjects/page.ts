import {logger} from "../utils/logger/logger";
import {browser} from "../helpers/browserHelper";
import BrowserHelper from "../helpers/browserHelper";
export default class Page {
    baseUrl = "http://google.com";


    async open(url: string): Promise<void> {
        await logger.info(`Opening the url "${url}"`, async () => {
            await browser.url(url);
        });
    }

    async reload(): Promise<void> {
        const currentUrl = browser.getUrl();

        await logger.info(`Reloading page with url "${currentUrl}"`, async () => {
            await browser.refresh();
        });
    }
}