import Page from "./page";
import ElementHelper from "../helpers/elementHelpers";

export default class LoginPage extends Page {
    private static usernameInput = 'input[name="login"]';
    private static passwordinput = 'input[name="password"]';
    private static submitBtn = 'button[type="submit"]';



    static async login(username: string, password: string) {
        await ElementHelper.setValue(LoginPage.usernameInput, username);
        await ElementHelper.setValue(LoginPage.passwordinput, password);
        await ElementHelper.click(LoginPage.submitBtn);
    }

    open () {
        return super.open('');
    }
}

