import {remote} from "webdriverio";
import {TestConfig} from "../data/TestConfig";

export default class BrowserHelper {

    static browser: WebdriverIO.Browser;


    public static async getBrowser(): Promise<WebdriverIO.Browser> {
        if (!BrowserHelper.browser) {

            BrowserHelper.browser = await remote({
                    capabilities: {browserName: TestConfig.getBrowserType()},
                         });
          }

        return BrowserHelper.browser;
    }


    public static async close() {
        await (await BrowserHelper.getBrowser()).deleteSession();
    }
}


