import {remote} from "webdriverio";

export default class BrowserHelper {

    static async getBrowser(): Promise<WebdriverIO.Browser> {

        return await remote({
            capabilities: { browserName: 'chrome' }
        })
    }
}
export const browser = await BrowserHelper.getBrowser();
// export const browser = Promise.resolve(() => {
//     BrowserHelper.getBrowser().then(r => r);
// });


// export const browser = await (async (): Promise<WebdriverIO.Browser> => {
//     return await BrowserHelper.getBrowser()
// })();

