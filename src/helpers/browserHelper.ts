import {remote} from "webdriverio";

export default class BrowserHelper {

    static browser: WebdriverIO.Browser;


    public static async getBrowser(): Promise<WebdriverIO.Browser> {
        if (!BrowserHelper.browser) {
                BrowserHelper.browser = await remote({
                capabilities: {browserName: 'chrome'}
                     });
        }

        return BrowserHelper.browser;
    }
    //
    // static async getBrowser(): Promise<WebdriverIO.Browser> {
    //        return  await remote({
    //             capabilities: {browserName: 'chrome'}
    //         })
    // }
}
// export const browser = Promise.resolve(() => {
//     BrowserHelper.getBrowser().then(r => r);
// });


// export const browser = await (async (): Promise<WebdriverIO.Browser> => {
//     return await BrowserHelper.getBrowser()
// })();

