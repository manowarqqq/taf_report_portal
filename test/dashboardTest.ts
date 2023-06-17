import {loginPage} from '../src/pageobjects/loginPage';
import {homePage} from '../src/pageobjects/homePage';
import {expect} from 'chai';
import {TestConfig} from '../src/data/testConfig';
import {BrowserHelper} from '../src/helpers/browserHelper';
import ElementHelper from '../src/helpers/elementHelpers';
import {DashboardPage} from '../src/pageobjects/dashboardPage';
import WindowHelper from '../src/helpers/windowHelper';
import {TitlesEnum} from '../src/enums/titlesEnum';
import {before, after, describe, it} from 'mocha';

describe('Dashboard  move and resize', () => {
    let widgetName = 'LAUNCH STATISTICS AREA';
    let dashboardName = 'DEMO DASHBOARD';
    let dashboard: DashboardPage;

    before(async () => {
        await BrowserHelper.init();
    });
    after(async () => {
        await BrowserHelper.close();
    });

    describe('Dashboard  move and resize', () => {
        let widgetSizeBefore: {x: number; y: number; width: number; height: number};
        before(async () => {
            await BrowserHelper.openPage();
        });
        after(async () => {
            await dashboard.resizeWidgetSize(widgetName, widgetSizeBefore.width, widgetSizeBefore.height);
            await WindowHelper.closeWindow();
        });

        it('Open dashboard page', async () => {
            await homePage.open();
            await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
            await homePage.waitForLoaded();
            dashboard = await homePage.openDashboard();

            expect(await dashboard.getTitle()).to.equal(TitlesEnum.DashboardPage, 'DashboardPage is not loaded');
        });

        it('Reduce width and height for widget', async () => {
            await dashboard.selectDashboard(dashboardName);
            widgetSizeBefore = await dashboard.getWidgetSize(widgetName);
            let targetSize = {
                width: widgetSizeBefore.width - 100,
                height: widgetSizeBefore.height - 100,
            };
            await dashboard.resizeWidgetSize(widgetName, targetSize.width, targetSize.height);

            expect((await dashboard.getWidgetSize(widgetName)).width).to.equal(widgetSizeBefore.width - 100, 'Wrong widget width');
            expect((await dashboard.getWidgetSize(widgetName)).height).to.equal(widgetSizeBefore.height - 100, 'Wrong widget height');
        });
    });
    describe('Dashboard  resize', () => {
        let widgetHeaderSizeBeforeTest: {x: number; y: number; width: number; height: number};
        before(async () => {
            await BrowserHelper.openPage();
        });
        after(async () => {
            await dashboard.moveWidgetByName(widgetName, {x: widgetHeaderSizeBeforeTest.x, y: widgetHeaderSizeBeforeTest.y});
            await WindowHelper.closeWindow();
        });

        it('Open dashboard page', async () => {
            await homePage.open();
            await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
            await homePage.waitForLoaded();
            dashboard = await homePage.openDashboard();

            expect(await dashboard.getTitle()).to.equal(TitlesEnum.DashboardPage, 'DashboardPage is not loaded');
        });

        it('Select dashboard and move it', async () => {
            await dashboard.selectDashboard(dashboardName);
            widgetHeaderSizeBeforeTest = await ElementHelper.getElementSize(dashboard.getWidgetHeaderByName(widgetName));
            const widgetHeaderCenter = {
                x: widgetHeaderSizeBeforeTest.x + widgetHeaderSizeBeforeTest.width / 2,
                y: widgetHeaderSizeBeforeTest.y + widgetHeaderSizeBeforeTest.height / 2,
            };
            await dashboard.moveWidgetByName(widgetName, {x: widgetHeaderCenter.x + 100, y: widgetHeaderCenter.y});
            const widgetHeaderAfter = await ElementHelper.getElementSize(dashboard.getWidgetHeaderByName(widgetName));

            expect(widgetHeaderAfter.x).to.greaterThan(widgetHeaderSizeBeforeTest.x, 'Wrong widget x position');
        });
    });
});
