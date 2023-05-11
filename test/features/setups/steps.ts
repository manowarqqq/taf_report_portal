import {loginPage} from '../../../src/pageobjects/loginPage';
import {homePage} from '../../../src/pageobjects/homePage';
import {expect} from 'chai';
import WindowHelper from '../../../src/helpers/windowHelper';
import {TitlesEnum} from '../../../src/enums/titlesEnum';
import {TestConfig} from '../../../src/data/testConfig';
import {BrowserHelper} from '../../../src/helpers/browserHelper';
import {filterPage} from '../../../src/pageobjects/filtersPage';
import {Given, When, Then} from '@cucumber/cucumber';

Given('I open login page', async function () {
    await homePage.open();
});

Given('I log in with credentials', async function () {
    await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
});

When('I open the filters page', async function () {
    await loginPage.login(TestConfig.getUsername(), TestConfig.getPassword());
    await homePage.waitForLoaded();
    let filterPage = await homePage.openFilters();
});

Then('Filters page is opened', async function () {
    expect(await filterPage.getTitle()).to.equal(TitlesEnum.FiltersPage, 'Filters is not loaded');
});
