import {BrowserHelper} from './browserHelper';
import {BrowserContext} from 'playwright';

export default class WindowHelper {
    static async navigateTo(url: string) {
        return await BrowserHelper.page.goto(url);
    }

    static async getCurrentWindowTitle() {
        return BrowserHelper.page.title();
    }

    public static async refresh() {
        return BrowserHelper.page.reload();
    }

    public static async closeWindow() {
        let context: BrowserContext = await BrowserHelper.page.context();
        await context.close();
        // await BrowserHelper.page.close();
    }

    public static async sendKeys(keys: string) {
        return BrowserHelper.page.keyboard.press(keys);
    }

    public static async takeScreenshot(path: string) {
        await BrowserHelper.page.screenshot({path: path});
    }
}
