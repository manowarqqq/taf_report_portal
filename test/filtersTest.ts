import {loginPage} from '../src/pageobjects/loginPage';
import {homePage} from '../src/pageobjects/homePage';
import {expect} from 'chai';
import WindowHelper from '../src/helpers/windowHelper';
import {TitlesEnum} from '../src/enums/titlesEnum';
import {TestConfig} from '../src/data/testConfig';
import {BrowserHelper} from '../src/helpers/browserHelper';
import {before, after, describe, it} from 'mocha';
import FiltersPage from '../src/pageobjects/filtersPage';

describe('Filters smoke tests suit', () => {
    before(async () => {
        await BrowserHelper.init();
    });
    after(async () => {
        await BrowserHelper.close();
    });

    describe('Login on Report Portal as default user', async () => {
        before(async () => {
            await BrowserHelper.openPage();
        });
        after(async () => {
            await WindowHelper.closeWindow();
        });

        it('Open Portal', async () => {
            await homePage.open();

            expect(await WindowHelper.getCurrentWindowTitle()).to.equal(TitlesEnum.ReportPortal, 'Report Portal is not loaded');
        });
        it('Login on Report Portal', async () => {
            await (await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword())).waitForLoaded();

            expect(await WindowHelper.getCurrentWindowTitle()).to.equal(TitlesEnum.ReportPortal, 'Home page is not loaded');
        });
    });

    describe('Open Filters Page', async () => {
        before(async () => {
            await BrowserHelper.openPage();
        });
        after(async () => {
            await WindowHelper.closeWindow();
        });

        it('Open Portal and Login', async () => {
            await homePage.open();
            await (await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword())).waitForLoaded();
            await homePage.waitForLoaded();

            expect(await WindowHelper.getCurrentWindowTitle()).to.equal(TitlesEnum.ReportPortal, 'Home page is not loaded');
        });

        it('Open Filters Page', async () => {
            let filterPage = await homePage.openFilters();

            expect(await filterPage.getTitle()).to.equal(TitlesEnum.FiltersPage, 'Filters is not loaded');
        });
    });

    describe('Should filters widget', async () => {
        let demoApiTestWidget = 20;
        let widgetName = 'Demo Api Tests';
        let filterPage: FiltersPage;

        before(async () => {
            await BrowserHelper.openPage();
        });
        after(async () => {
            await WindowHelper.closeWindow();
        });

        it('Open Portal and Login', async () => {
            await homePage.open();
            await (await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword())).waitForLoaded();
            await homePage.waitForLoaded();

            expect(await WindowHelper.getCurrentWindowTitle()).to.equal(TitlesEnum.ReportPortal, 'Home page is not loaded');
        });

        it('Open Filters Page', async () => {
            filterPage = await homePage.openFilters();

            expect(await filterPage.getTitle()).to.equal(TitlesEnum.FiltersPage, 'Filters is not loaded');
        });

        it('Filter widgets', async () => {
            await filterPage.filterLaunchName(widgetName);
            let widgetNames = await filterPage.getAllWidget();

            expect(widgetNames.length).to.equal(demoApiTestWidget, 'Numbers of widget is incorrect after filtering');
        });
    });
});
