import {BrowserHelper} from './browserHelper';

export default class ElementHelper {
    static async getElement(locator: string) {
        return await BrowserHelper.page.$(locator);
    }

    static async getElements(locator: string) {
        return await BrowserHelper.page.$$(locator);
    }

    public static async getText(locator: string, isInnerText: boolean = false) {
        const element = await ElementHelper.getElement(locator);
        if (isInnerText) {
            return element?.getAttribute('innerText');
        } else {
            return element?.textContent();
        }
    }

    public static async getTextElementsArray(locator: string, isInnerText: boolean = false) {
        const elements = await ElementHelper.getElements(locator);
        const textArr: string[] = [];

        for (let i = 0; i < elements.length; i++) {
            if (isInnerText) {
                textArr.push(<string>await elements[i].getAttribute('innerText'));
            } else {
                textArr.push(<string>await elements[i].textContent());
            }
        }
        return textArr;
    }

    static async click(locator: string) {
        await BrowserHelper.page.locator(locator).click();
    }

    public static async setValue(locator: string, value: string) {
        await BrowserHelper.page.click(locator, {clickCount: 3});
        await BrowserHelper.page.keyboard.press('Backspace');
        await BrowserHelper.page.type(locator, value);
    }

    public static async getUrl(): Promise<string> {
        return BrowserHelper.page.url();
    }

    public static async getAttributeValue(locator: string, attribute: string) {
        return await (await BrowserHelper.page.$(locator))?.getAttribute(attribute);
    }

    public static async scrollToElement(locator: string) {
        await (await ElementHelper.getElement(locator))?.scrollIntoViewIfNeeded();
    }

    public static async takeElementScreenshot(locator: string, path: string) {
        await BrowserHelper.page.locator(locator).screenshot({path: path});
    }

    public static async getElementSize(locator: string): Promise<{x: number; y: number; width: number; height: number} | null> {
        const element = await ElementHelper.getElement(locator);
        return element?.boundingBox();
    }

    public static async resizeElement(locator: string, width: number, height: number) {
        let element;
        await BrowserHelper.page.evaluate(
            ({locator, width, height}) => {
                if (locator.startsWith('//')) {
                    element = document.evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLInputElement | null;
                } else {
                    element = document.querySelector(locator) as HTMLInputElement | null;
                }
                if (element) {
                    element.style.width = `${width}px`;
                    element.style.height = `${height}px`;
                }
            },
            {locator, width, height},
        );
    }
}
