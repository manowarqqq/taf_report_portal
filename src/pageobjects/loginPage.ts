import Page from "./page";
import {browser} from "../helpers/browserHelper";
import ElementHelper from "../helpers/elementHelpers";

class LoginPage extends Page {
    private submitBtn: string;
    private usernameInput: string;
    private passwordinput: string;

    constructor() {
        super();
        this.usernameInput = 'input[name="login"]';
        this.passwordinput = 'input[name="password"]';
        this.submitBtn = 'button[type="submit"]';
    }

    async login(username: string, password: string) {
        await (await browser.$(this.usernameInput)).setValue(username);
        await (await browser.$(this.passwordinput)).setValue(password);
        await ElementHelper.click(this.submitBtn);
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();