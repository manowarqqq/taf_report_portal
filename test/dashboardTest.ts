import {loginPage} from '../src/pageobjects/loginPage';
import {homePage} from '../src/pageobjects/homePage';
import {expect} from 'chai';
import {TestConfig} from '../src/data/testConfig';
import {BrowserHelper} from '../src/helpers/browserHelper';

describe('Dashboard resize', () => {
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
        let dashboard = await homePage.openDashboard();
        await dashboard.selectDashboard(dashboardName);
        let widgetSizeBefore = await dashboard.getWidgetSize(widgetName);
        await dashboard.resizeWidgetSize(widgetName, -100, -100);

        expect((await dashboard.getWidgetSize(widgetName)).width).to.equal(widgetSizeBefore.width - 100, 'Wrong widget width');
        expect((await dashboard.getWidgetSize(widgetName)).height).to.equal(widgetSizeBefore.height - 100, 'Wrong widget width');
    });
});
