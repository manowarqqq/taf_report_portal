import BrowserHelper from "./browserHelper";

export default class WindowHelper {

    static async navigateTo(url: string): Promise<string> {
        return await (await BrowserHelper.getBrowser()).url(url);
    }

    static async getCurrentWindowTitle() {
        return await (await BrowserHelper.getBrowser()).getTitle();
    }

    public static async refresh() {
        await (await BrowserHelper.getBrowser()).refresh();
    }
}
