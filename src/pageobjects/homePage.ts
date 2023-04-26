import BasePage from "./basePage";
import BrowserHelper from "../helpers/browserHelper";
import ElementHelper from "../helpers/elementHelpers";
import {Timeouts} from "../helpers/timeouts";
import {TitlesEnum} from "../enums/titlesEnum";
import FiltersPage from "./filtersPage";

export class HomePage extends BasePage {

    private static title = 'head>title';
    private static filtersBtn = '[class^="sidebar__top-block"] div:nth-child(3)';

    static async waitForLoaded(){
        (await BrowserHelper.getBrowser()).waitUntil(
            async () => {

                    return (await ElementHelper.getText(HomePage.title)) === TitlesEnum.ReportPortal;
            },
            {timeout: Timeouts.long, timeoutMsg: `"${TitlesEnum.ReportPortal}" windows is not loaded`},
        )
    }

    static async openFilters() {
    await ElementHelper.click(HomePage.filtersBtn);
    await FiltersPage.waitForLoaded();
    }
}

