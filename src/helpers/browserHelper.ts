// import playwright, {Browser, BrowserContext, Page} from 'playwright';
//
// export class BrowserHelper {
//     static browser: Browser;
//
//     static page: Page;
//
//     public static async init(): Promise<Browser> {
//         if (!BrowserHelper.browser) {
//             BrowserHelper.browser = await playwright.chromium.launch({
//                 headless: false,
//                 args: ['--start-maximized '],
//                 slowMo: 1000,
//             });
//         }
//         return BrowserHelper.browser;
//     }

    public static async openPage() {
        this.page = await (await BrowserHelper.browser.newContext({viewport: null})).newPage();
    }

    public static async close() {
        let contexts: BrowserContext[] = BrowserHelper.browser.contexts();
        for (let context of contexts) {
            await context.close();
        }
        await BrowserHelper.browser.close();
        this.browser = null;
    }
}
