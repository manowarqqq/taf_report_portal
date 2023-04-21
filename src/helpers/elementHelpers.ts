import BrowserHelper from "./browserHelper";

export default class ElementHelper {

    private static browser: any;


    static async open(url: string) {
        let browser = await BrowserHelper.getBrowser();
        return browser.url(url);
    }
    // static async getElement(locator: string): Promise<WebdriverIO.Element>{
    //     return browser.$(locator);
    // }

    // static async click(locator: string) {
    //     await (await ElementHelper.getElement(locator)).click();
    // }
}
