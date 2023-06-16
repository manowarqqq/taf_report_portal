import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import FiltersPage from './filtersPage';
import {BrowserHelper} from '../helpers/browserHelper';
import {DashboardPage} from './dashboardPage';

export class HomePage extends BasePage {
    private title: string;

    private filtersBtn: string;

    private dashboardBtn: string;

    constructor() {
        super();
        this.title = 'head>title';
        this.filtersBtn = '[class^="sidebar__top-block"] div:nth-child(3)';
        this.dashboardBtn = '[class^="sidebar__top-block"] .sidebar__sidebar-btn--1kGbJ:nth-child(1)';
    }

    public async waitForLoaded(): Promise<HomePage> {
        await BrowserHelper.page.waitForLoadState();
        return new HomePage();
    }

    public async openFilters(): Promise<FiltersPage> {
        await ElementHelper.click(this.filtersBtn);
        await this.waitForLoaded();

        return new FiltersPage();
    }

    public async openDashboard(): Promise<DashboardPage> {
        await ElementHelper.click(this.dashboardBtn);
        await this.waitForLoaded();

        return new DashboardPage();
    }
}

export const homePage = new HomePage();
