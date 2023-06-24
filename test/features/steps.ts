import {loginPage} from '../../src/pageobjects/loginPage';
import {homePage} from '../../src/pageobjects/homePage';
import {expect} from 'chai';
import {TitlesEnum} from '../../src/enums/titlesEnum';
import {TestConfig} from '../../src/data/testConfig';
import {filterPage} from '../../src/pageobjects/filtersPage';
import {Given, When, Then} from '@cucumber/cucumber';
import {BrowserHelper} from '../../src/helpers/browserHelper';

Given('I open login page', async function () {
    await BrowserHelper.init();
    await homePage.open();
});

Given('I log in with credentials', async function () {
    await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
});

When('I open the filters page', async function () {
    await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
    await homePage.waitForLoaded();
    await homePage.openFilters();
});

Then('Filters page is opened', async function () {
    expect(await filterPage.getTitle()).to.equal(TitlesEnum.FiltersPage, 'Filters is not loaded');
});

When('I filter widgets by {string} name', async function (widgetName: string) {
    await filterPage.filterLaunchName(widgetName);
});

Then('{int} widgets is displayed', async function (demoApiTestWidget: number) {
    let widgetNames = await filterPage.getAllWidget();

    expect(widgetNames.length).to.equal(demoApiTestWidget, 'Numbers of widget is incorrect after filtering');
});
