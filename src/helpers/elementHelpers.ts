import {browser} from "./browserHelper";
export default class ElementHelper {


    static async getElement(locator: string): Promise<WebdriverIO.Element>{
        return browser.$(locator);
    }

    static async click(locator: string) {
        await (await ElementHelper.getElement(locator)).click();
    }


}
