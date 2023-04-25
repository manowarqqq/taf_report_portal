import BrowserHelper from "./browserHelper";
import {Timeouts} from "./timeouts";



export default class ElementHelper {




    static async getElement(locator: string): Promise<WebdriverIO.Element>{
        return(await BrowserHelper.getBrowser()).$(locator);
    }

    public static async getText(locator: string, isInnerText = false): Promise<string> {
        const element =await (await BrowserHelper.getBrowser()).$(locator);
        if(isInnerText) {

           return await element.getAttribute('innerText');
            } else {
                return await element.getText();
            }
        }

    static async click(locator: string) {
        await (await ElementHelper.getElement(locator)).click();
    }

    public static async setValue(locator: string, value: string) {
        const element = (await BrowserHelper.getBrowser()).$(locator);
        await element.waitForDisplayed({timeout: Timeouts.medium});
        await (await (await BrowserHelper.getBrowser()).$(locator)).setValue(value);
    }

    public static async getUrl(): Promise<string> {
        return (await BrowserHelper.getBrowser()).getUrl();
    }

    public static async isClickable(locator: string): Promise<boolean> {
        return await ((await BrowserHelper.getBrowser()).$(locator)).isClickable();
    }


    public static async getAttributeValue(locator: string, attribute: string): Promise<string> {
        return await (await (await BrowserHelper.getBrowser()).$(locator)).getAttribute(attribute);
    }

}

