import Page from "../src/pageobjects/page";

describe("Check navigation items number", () => {
    let testBrowser: { deleteSession: () => any; };

    it("login", async () => {
        const page = new Page();
        await page.open('/');
    });
});

