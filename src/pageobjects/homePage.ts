import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {TitlesEnum} from '../enums/titlesEnum';
import FiltersPage from './filtersPage';
import Waiters from '../helpers/waiters';

export class HomePage extends BasePage {
    private title: string;

    private filtersBtn: string;

    constructor() {
        super();
        this.title = 'head>title';
        this.filtersBtn = '[class^="sidebar__top-block"] div:nth-child(3)';
    }

    public async waitForLoaded(): Promise<HomePage> {
        await Waiters.waitForWindowLoadedByTitle(this.title, TitlesEnum.ReportPortal);

        return new HomePage();
    }

    public async openFilters(): Promise<FiltersPage> {
        await ElementHelper.click(this.filtersBtn);
        await this.waitForLoaded();

        return new FiltersPage();
    }
}

export const homePage = new HomePage();
