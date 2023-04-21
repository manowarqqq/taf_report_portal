import Page from "./Page";

export class HomePage extends Page {
    private url: string;

    constructor() {
        super();
        this.url = "/";
    }
    async open() {
        return super.open(this.url);
    }

}

