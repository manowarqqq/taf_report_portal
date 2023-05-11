import BasePage from './basePage';
import ElementHelper from '../helpers/elementHelpers';
import {TitlesEnum} from '../enums/titlesEnum';
import Waiters from '../helpers/waiters';

export default class FiltersPage extends BasePage {
    private title: string;

    constructor() {
        super();
        this.title = '#app div[class^="pageLayout__page-header"] span[title]';
    }

    public async waitForLoaded() {
        await Waiters.waitForWindowLoadedByTitle(this.title, TitlesEnum.FiltersPage);
    }

    public async getTitle(): Promise<string> {
        return await ElementHelper.getText(this.title);
    }
}
