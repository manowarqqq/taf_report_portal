import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {BrowserHelper} from '../helpers/browserHelper';
import {Timeouts} from '../helpers/timeouts';

export class DashboardPage extends BasePage {
    private title: string;

    private editDashboardButtonElement: string;

    private widgetHeaderElements: string;

    constructor() {
        super();
        this.title = '#app div[class^="pageLayout__page-header"] span[title]';
        this.editDashboardButtonElement = "div > div[class*='buttons-block']:nth-child(2) > button:nth-child(1)";
    }

    getDashboardByNameElement(name: string) {
        return `//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]`;
    }

    getWidgetByName(name: string) {
        return `//div[contains(@class, "widgetsGrid") and contains(., "${name}")]`;
    }

    getWidgetHeaderByName(name: string) {
        return `//div[contains(@class, "widget__widget-header") and contains(., "${name}")]`;
    }

    public async getTitle() {
        return await ElementHelper.getText(this.title);
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
            await ElementHelper.resizeElement(this.getWidgetByName(name), x, y);
        } else throw new Error('Coulnt get element size');
    }

    async moveWidgetByName(widgetName: string, coordinates: {x: number; y: number}) {
        const locator = this.getWidgetHeaderByName(widgetName);
        await ElementHelper.dragAndDropElement(locator, coordinates);
    }
}
export const dashboardPage = new DashboardPage();
