import testconfigJson from '../../testconfig.json';

import 'dotenv/config';

export class TestConfig {
    private static testConfig: typeof testconfigJson = testconfigJson;

    public static isChrome(): boolean {
        return TestConfig.testConfig.browser === 'Chrome';
    }

    public static getBrowserType() {
        return TestConfig.testConfig.browser;
    }

    public static getUsername() {
        return process.env.DEMO_PORTAL_USERNAME;
    }

    public static getPassword(): string {
        return process.env.DEMO_PORTAL_USERNAME;
    }

    public static getBaseUrl(): string {
        return TestConfig.testConfig.baseUrl;
    }

    public static getConfig() {
        return TestConfig.testConfig;
    }

    public static getRunner() {
        return TestConfig.testConfig.runner;
    }

    static getProject() {
        return TestConfig.testConfig.project;
    }

    static getDriver() {
        return TestConfig.testConfig.driver;
    }
}
