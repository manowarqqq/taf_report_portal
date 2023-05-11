import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {TitlesEnum} from '../enums/titlesEnum';
import Waiters from '../helpers/waiters';
import WindowHelper from '../helpers/windowHelper';
import {Key} from 'webdriverio';

export default class FiltersPage extends BasePage {
    private title: string;

    private inputLaunchName: string;

    constructor() {
        super();
        this.title = '#app div[class^="pageLayout__page-header"] span[title]';
        this.inputLaunchName = 'input[placeholder="Enter name"]';
    }

    public async waitForLoaded() {
        await Waiters.waitForWindowLoadedByTitle(this.title, TitlesEnum.FiltersPage);
    }

    public async getTitle(): Promise<string> {
        return await ElementHelper.getText(this.title);
    }

    public async filterLaunchName(launchName: string) {
        await ElementHelper.setValue(this.inputLaunchName, launchName);
        await WindowHelper.sendKeys(Key.Enter);
    }
}

export const filterPage = new FiltersPage();
