import Page from "./page";
import ElementHelper from "../helpers/elementHelpers";

export default class LoginPage extends Page {
    private static submitBtn: string = 'input[name="login"]';
    private static usernameInput: string = 'input[name="password"]';
    private static passwordinput: string = 'button[type="submit"]';

    // constructor() {
    //     super();
    //     this.usernameInput = 'input[name="login"]';
    //     this.passwordinput = 'input[name="password"]';
    //     this.submitBtn = 'button[type="submit"]';
    // }

    static async login(username: string, password: string) {
        await ElementHelper.setValue(LoginPage.usernameInput, username);
        await ElementHelper.setValue(LoginPage.passwordinput, password);
        await ElementHelper.click(LoginPage.submitBtn);
    }

    open () {
        return super.open('');
    }
}

