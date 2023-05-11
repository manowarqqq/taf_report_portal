import mochaConfig from '../config/mochaConfig.json';
import jasmineConfig from '../config/jasmineConfig.json';
import Mocha from 'mocha';
import Jasmine from 'jasmine';
import path from 'path';
import {TestConfig} from '../data/testConfig';

(async () => {
    if (TestConfig.getRunner() === 'Mocha') {
        const runner = new Mocha(mochaConfig);
        runner.addFile(path.join(__dirname, '../../test/reportPortalTests.js'));
        runner.run();
    } else {
        const testRunner = new Jasmine({projectBaseDir: __dirname});
        testRunner.loadConfigFile(jasmineConfig);
        await testRunner.execute();
    }
})();
