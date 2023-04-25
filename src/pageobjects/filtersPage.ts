import Page from "./page";
import BrowserHelper from "../helpers/browserHelper";
import ElementHelper from "../helpers/elementHelpers";
import {TitlesEnum} from "../enums/titlesEnum";
import {Timeouts} from "../helpers/timeouts";

export default class FiltersPage extends Page {

        private static title = '#app div[class^="pageLayout__page-header"] span[title]';

    static async waitForLoaded(){
        (await BrowserHelper.getBrowser()).waitUntil(
            async () => {

                return (await ElementHelper.getText(FiltersPage.title)) === TitlesEnum.FiltersPage;
            },
            {timeout: Timeouts.long, timeoutMsg: `"${TitlesEnum.FiltersPage}" windows is not loaded`},
        )
    }

    static async getTitle(): Promise<string> {

         return  await ElementHelper.getText(this.title)
    }
}
