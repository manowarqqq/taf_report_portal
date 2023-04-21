import Page from "../src/pageobjects/Page";

describe("Check navigation items number", () => {
    let testBrowser: { deleteSession: () => any; };

    it("login", async () => {
        const page = new Page();
        await page.open('/');
    });
});

