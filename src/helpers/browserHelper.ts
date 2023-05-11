import {remote} from 'webdriverio';
import {TestConfig} from '../data/testConfig';
import chromedriver from 'chromedriver';

export class BrowserHelper {
    static browser: WebdriverIO.Browser;

    public static async init(): Promise<WebdriverIO.Browser> {
        if (!BrowserHelper.browser) {
            chromedriver.start(['--port=4444', '--silent']);

            BrowserHelper.browser = await remote({
                automationProtocol: 'webdriver',
                capabilities: {browserName: TestConfig.getBrowserType()},
            });
        }
        return BrowserHelper.browser;
    }

    public static async close() {
        await BrowserHelper.browser.deleteSession();
        await chromedriver.stop();
    }
}
