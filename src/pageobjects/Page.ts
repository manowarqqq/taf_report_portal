import ElementHelper from "../helpers/elementHelpers";

export default class Page {
    baseUrl = "http://google.com";

    constructor() {
    }

    async open(path: any) {
        return ElementHelper.open(`${this.baseUrl}${path}`);
    }
}
