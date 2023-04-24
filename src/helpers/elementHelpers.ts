import BrowserHelper from "./browserHelper";



export default class ElementHelper {



    static async navigateTo(url: string): Promise<string> {
       return await (await BrowserHelper.getBrowser()).url(url);
    }

    static async getElement(locator: string): Promise<WebdriverIO.Element>{
        return (await BrowserHelper.getBrowser()).$(locator);
    }

    static async click(locator: string) {
        await (await ElementHelper.getElement(locator)).click();
    }

    public static async setValue(locator: string, value: string) {
        await (await (await BrowserHelper.getBrowser()).$(locator)).setValue(value);
    }

    public static async getUrl(): Promise<string> {
        return (await BrowserHelper.getBrowser()).getUrl();
    }

    public static async refresh() {
        await (await BrowserHelper.getBrowser()).refresh();
    }

    public static async isClickable(locator: string): Promise<boolean> {
        return await ((await BrowserHelper.getBrowser()).$(locator)).isClickable();
    }
}

