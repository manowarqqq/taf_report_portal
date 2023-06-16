import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {BrowserHelper} from '../helpers/browserHelper';
import {Timeouts} from '../helpers/timeouts';

export class DashboardPage extends BasePage {
    private title: string;

    private inputLaunchName: string;

    private addFilterButton: string;

    private widgetNames: string;

    private editDashboardButtonElement: string;

    private widgetHeaderElements: string;

    constructor() {
        super();
        this.title = '#app div[class^="pageLayout__page-header"] span[title]';
        this.editDashboardButtonElement = "div > div[class*='buttons-block']:nth-child(2) > button:nth-child(1)";
        this.widgetHeaderElements = '[class*=widgetHeader__info-block] > [class*=widgetHeader__widget-name]';
    }

    getDashboardByNameElement(name: string) {
        return `//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]`;
    }

    getWidgetByName(name: string) {
        return `//div[contains(@class, "widgetsGrid") and contains(., "${name}")]`;
    }

    async selectDashboard(name: string) {
        let dashboard = this.getDashboardByNameElement(name);
        await ElementHelper.click(dashboard);
        await BrowserHelper.page.waitForSelector(this.editDashboardButtonElement, {timeout: Timeouts.medium});
    }

    async getWidgetsNames() {
        return await ElementHelper.getTextElementsArray(this.widgetHeaderElements);
    }

    async getWidgetSize(name: string): Promise<{x: number; y: number; width: number; height: number} | null> {
        return await ElementHelper.getElementSize(this.getWidgetByName(name));
    }

    async resizeWidgetSize(name: string, x: number, y: number) {
        let size = await ElementHelper.getElementSize(this.getWidgetByName(name));
        if (size) {
            await ElementHelper.resizeElement(this.getWidgetByName(name), size.width + x, size?.height + y);
        } else throw new Error('Coulnt get element size');
    }

    async getWidgetsLocations() {
        let widgetNames = await this.getWidgetsNames();
        let widgetLocations = [];
        for (let widgetName of widgetNames) {
            widgetLocations.push(await this.getWidgetSize(widgetName));
        }

        return widgetLocations;
    }
}
export const dashboardPage = new DashboardPage();
