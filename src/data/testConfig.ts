import testconfigJson from '../../testconfig.json';

export class TestConfig {
    private static testConfig: typeof testconfigJson = testconfigJson;

    public static isChrome(): boolean {
        return TestConfig.testConfig.browser === 'Chrome';
    }

    public static getBrowserType() {
        return TestConfig.testConfig.browser;
    }

    public static getUsername() {
        return TestConfig.testConfig.username;
    }

    public static getPassword(): string {
        return TestConfig.testConfig.password;
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
