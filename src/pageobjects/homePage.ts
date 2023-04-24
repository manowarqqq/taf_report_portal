import Page from "./page";

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

