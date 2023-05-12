import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {TitlesEnum} from '../enums/titlesEnum';
import Waiters from '../helpers/waiters';
import WindowHelper from '../helpers/windowHelper';
import {Key} from 'webdriverio';

export default class FiltersPage extends BasePage {
    private title: string;

    private inputLaunchName: string;

    private addFilterButton: string;

    private widgetNames: string;

    constructor() {
        super();
        this.title = '#app div[class^="pageLayout__page-header"] span[title]';
        this.inputLaunchName = 'input[placeholder="Enter name"]';
        this.addFilterButton = '//span[text()="Add filter"]';
        this.widgetNames = '.itemInfo__name--27fwI>span';
    }

    public async waitForLoaded() {
        await Waiters.waitForWindowLoadedByTitle(this.title, TitlesEnum.FiltersPage);
    }

    public async getTitle(): Promise<string> {
        return await ElementHelper.getText(this.title);
    }

    public async filterLaunchName(launchName: string) {
        await ElementHelper.click(this.addFilterButton);
        await ElementHelper.setValue(this.inputLaunchName, launchName);
        await WindowHelper.sendKeys(Key.Enter);
    }

    public async getAllWidget(): Promise<string[]> {
        return ElementHelper.getTextElementsArray(this.widgetNames);
    }
}

export const filterPage = new FiltersPage();
