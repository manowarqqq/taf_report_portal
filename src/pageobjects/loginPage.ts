import BasePage from "./basePage";
import ElementHelper from "../helpers/elementHelpers";

export default class LoginPage extends BasePage {
    private static usernameInput = 'input[name="login"]';
    private static passwordInput = 'input[name="password"]';
    private static submitBtn = 'button[type="submit"]';


    static async login(username: string, password: string) {
        await ElementHelper.setValue(LoginPage.usernameInput, username);
        await ElementHelper.setValue(LoginPage.passwordInput, password);
        await ElementHelper.click(LoginPage.submitBtn);
    }
}

