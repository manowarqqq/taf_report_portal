import Page from "../src/pageobjects/page";
import LoginPage from "../src/pageobjects/loginPage";
import Waiters from "../src/helpers/waiters";
describe("Check navigation items number", () => {
    // let testBrowser: { deleteSession: () => any; };

    it("login", async () => {
        const page = new Page();
        await page.open('http://localhost:8080');
        await Waiters.delay(15000);
        await LoginPage.login('default','1q2w3e');
        await Waiters.delay(10000);

    });
});

