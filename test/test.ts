import Page from "../src/pageobjects/page";
import LoginPage from "../src/pageobjects/loginPage";
import Waiters from "../src/helpers/waiters";
import {HomePage} from "../src/pageobjects/homePage";
import {expect} from 'chai';
import WindowHelper from "../src/helpers/windowHelper";
import {TitlesEnum} from "../src/enums/titlesEnum";
import FiltersPage from "../src/pageobjects/filtersPage";
import {TestConfig} from "../src/data/TestConfig";
import BrowserHelper from "../src/helpers/browserHelper";

describe("Smoke tests suit", () => {
    // let testBrowser: { deleteSession: () => any; };
    describe("Login as default user", async  () => {

        after(async () => {
            await BrowserHelper.close();
        })

        it("should be possible to login as default user", async () => {
            const page = new Page();
            await page.open(TestConfig.getBaseUrl());
            await LoginPage.login(TestConfig.getUsername(),TestConfig.getPassword());
            await HomePage.waitForLoaded();

            expect(await WindowHelper.getCurrentWindowTitle()).to.equal(TitlesEnum.ReportPortal, 'Home page is not loaded');
        });

        it("should open Filters page", async () => {
            await Waiters.delay(3000);
            await HomePage.openFilters();

            expect(await FiltersPage.getTitle()).to.equal(TitlesEnum.FiltersPage, 'Filters is not loaded');
        });
    })



});

