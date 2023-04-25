import {remote} from "webdriverio";
import {TestConfig} from "../data/TestConfig";
import SeleniumStandalone from "selenium-standalone";

export default class BrowserHelper {

    static browser: WebdriverIO.Browser;


    public static async getBrowser(): Promise<WebdriverIO.Browser> {
        if (!BrowserHelper.browser) {
            await SeleniumStandalone.install();
            await SeleniumStandalone.start();

            BrowserHelper.browser = await remote({
                    automationProtocol: "webdriver",
                    capabilities: {browserName: TestConfig.getBrowserType()},
                    services: [ 'selenium-standalone' ],
                         });
          }

        return BrowserHelper.browser;
    }


    public static async close() {
        await (await BrowserHelper.getBrowser()).deleteSession();
    }


}
// export const browser = Promise.resolve(() => {
//     BrowserHelper.getBrowser().then(r => r);
// });


// export const browser = await (async (): Promise<WebdriverIO.Browser> => {
//     return await BrowserHelper.getBrowser()
// })();

