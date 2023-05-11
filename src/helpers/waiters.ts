import ElementHelper from './elementHelpers';
import {Timeouts} from './timeouts';
import {BrowserHelper} from './browserHelper';

export default class Waiters {
    public static async delay(ms: number) {
        await BrowserHelper.browser.pause(ms);
    }

    public static async waitForWindowLoadedByTitle(titleLocator: string, title: string) {
        BrowserHelper.browser.waitUntil(
            async () => {
                return (await ElementHelper.getText(titleLocator)) === title;
            },
            {timeout: Timeouts.long, timeoutMsg: `"${title}" windows is not loaded`},
        );
    }
}
