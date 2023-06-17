import {loginPage} from '../src/pageobjects/loginPage';
import {homePage} from '../src/pageobjects/homePage';
import {expect} from 'chai';
import {TestConfig} from '../src/data/testConfig';
import {BrowserHelper} from '../src/helpers/browserHelper';
import ElementHelper from '../src/helpers/elementHelpers';

describe('Dashboard  move and resize', () => {
    let widgetName = 'LAUNCH STATISTICS AREA';
    let dashboardName = 'DEMO DASHBOARD';

    before(async () => {
        await BrowserHelper.init();
    });
    after(async () => {
        await BrowserHelper.close();
    });
    beforeEach(async () => {
        await BrowserHelper.openPage();
    });

    it('Reduce width and height for widget', async () => {
        await homePage.open();
        await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
        await homePage.waitForLoaded();
        const dashboard = await homePage.openDashboard();
        await dashboard.selectDashboard(dashboardName);
        const widgetSizeBefore = await dashboard.getWidgetSize(widgetName);
        await dashboard.resizeWidgetSize(widgetName, -100, -100);

        expect((await dashboard.getWidgetSize(widgetName)).width).to.equal(widgetSizeBefore.width - 100, 'Wrong widget width');
        expect((await dashboard.getWidgetSize(widgetName)).height).to.equal(widgetSizeBefore.height - 100, 'Wrong widget width');
    });

    it('Reduce width and height for widget', async () => {
        await homePage.open();
        await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
        await homePage.waitForLoaded();
        const dashboard = await homePage.openDashboard();
        await dashboard.selectDashboard(dashboardName);
        const widgetHeaderBefore = await ElementHelper.getElementSize(dashboard.getWidgetHeaderByName(widgetName));
        const widgetHeaderCenter = {
            x: widgetHeaderBefore.x + widgetHeaderBefore.width / 2,
            y: widgetHeaderBefore.y + widgetHeaderBefore.height / 2,
        };
        await dashboard.moveWidgetByName(widgetName, {x: widgetHeaderCenter.x + 100, y: widgetHeaderCenter.y});
        const widgetHeaderAfter = await ElementHelper.getElementSize(dashboard.getWidgetHeaderByName(widgetName));

        expect(widgetHeaderAfter.x).to.greaterThan(widgetHeaderBefore.x, 'Wrong widget width');
    });
});
