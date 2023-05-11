import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {HomePage} from './homePage';

export default class LoginPage extends BasePage {
    private usernameInput: string;

    private passwordInput: string;

    private submitBtn: string;

    constructor() {
        super();
        this.usernameInput = 'input[name="login"]';
        this.passwordInput = 'input[name="password"]';
        this.submitBtn = 'button[type="submit"]';
    }

    public async login(username: string, password: string): Promise<HomePage> {
        await ElementHelper.setValue(this.usernameInput, username);
        await ElementHelper.setValue(this.passwordInput, password);
        await ElementHelper.click(this.submitBtn);

        return new HomePage();
    }
}

export const loginPage = new LoginPage();
