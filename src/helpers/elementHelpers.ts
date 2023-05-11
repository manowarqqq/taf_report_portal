import {BrowserHelper} from './browserHelper';
import {Timeouts} from './timeouts';

export default class ElementHelper {
    static async getElement(locator: string): Promise<WebdriverIO.Element> {
        return BrowserHelper.browser.$(locator);
    }

    public static async getText(locator: string, isInnerText: boolean = false): Promise<string> {
        const element = await BrowserHelper.browser.$(locator);
        if (isInnerText) {
            return await element.getAttribute('innerText');
        } else {
            return await element.getText();
        }
    }

    static async click(locator: string) {
        await (await ElementHelper.getElement(locator)).click();
    }

    public static async setValue(locator: string, value: string) {
        const element = BrowserHelper.browser.$(locator);
        await element.waitForDisplayed({timeout: Timeouts.medium});
        await (await BrowserHelper.browser.$(locator)).setValue(value);
    }

    public static async getUrl(): Promise<string> {
        return BrowserHelper.browser.getUrl();
    }

    public static async isClickable(locator: string): Promise<boolean> {
        return await BrowserHelper.browser.$(locator).isClickable();
    }

    public static async getAttributeValue(locator: string, attribute: string): Promise<string> {
        return await (await BrowserHelper.browser.$(locator)).getAttribute(attribute);
    }
}
