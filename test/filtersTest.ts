import {loginPage} from '../src/pageobjects/loginPage';
import {homePage} from '../src/pageobjects/homePage';
import {expect} from 'chai';
import WindowHelper from '../src/helpers/windowHelper';
import {TitlesEnum} from '../src/enums/titlesEnum';
import {TestConfig} from '../src/data/testConfig';
import {BrowserHelper} from '../src/helpers/browserHelper';

describe('Filters smoke tests suit', () => {
    before(async () => {
        await BrowserHelper.init();
    });
    after(async () => {
        await BrowserHelper.close();
    });
    beforeEach(async () => {
        await BrowserHelper.openPage();
        await homePage.open();
    });
    afterEach(async () => {
        await WindowHelper.closeWindow();
    });

    it('should be possible to login as default user', async () => {
        await (await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword())).waitForLoaded();

        expect(await WindowHelper.getCurrentWindowTitle()).to.equal(TitlesEnum.ReportPortal, 'Home page is not loaded');
    });

    it('should open Filters page', async () => {
        await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
        await homePage.waitForLoaded();
        let filterPage = await homePage.openFilters();

        expect(await filterPage.getTitle()).to.equal(TitlesEnum.FiltersPage, 'Filters is not loaded');
    });

    it('Should filters widget', async () => {
        let demoApiTestWidget = 50;
        let widgetName = 'Demo Api Tests';
        await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
        await homePage.waitForLoaded();
        let filterPage = await homePage.openFilters();
        await filterPage.filterLaunchName(widgetName);
        let widgetNames = await filterPage.getAllWidget();

        expect(widgetNames.length).to.equal(demoApiTestWidget, 'Numbers of widget is incorrect after filtering');
    });
});
