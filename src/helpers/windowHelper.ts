import {BrowserHelper} from './browserHelper';
import {Key} from 'webdriverio';

export default class WindowHelper {
    static async navigateTo(url: string): Promise<string> {
        return BrowserHelper.browser.url(url);
    }

    static async getCurrentWindowTitle() {
        return await BrowserHelper.browser.getTitle();
    }

    public static async refresh() {
        await BrowserHelper.browser.refresh();
    }

    public static async closeWindow() {
        await BrowserHelper.browser.closeWindow();
    }

    public static async sendKeys(keys: string | string[]) {
        await BrowserHelper.browser.keys(keys);
    }
}
