import BrowserHelper from "./browserHelper";

export default class Waiters {
    public static async delay(ms: number) {
            await (await BrowserHelper.getBrowser()).pause(ms);
        }
    }
