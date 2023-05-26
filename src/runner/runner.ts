import mochaConfig from '../config/mochaConfig.json';
import Mocha from 'mocha';
import Jasmine from 'jasmine';
import path from 'path';
import {TestConfig} from '../data/testConfig';
import {logger} from '../utils/logger/logger';
// import * as Jasmine from 'jasmine';

(async () => {
    if (TestConfig.getRunner() === 'mocha') {
        const runner = new Mocha(mochaConfig);
        runner.addFile(path.join(__dirname, '../../test/api/reportPortalApiTests.js'));
        runner.run();
    } else if (TestConfig.getRunner() === 'jasmine') {
        const testRunner = new Jasmine({projectBaseDir: __dirname});
        testRunner.loadConfigFile('../config/jasmineConfig.json');
        await testRunner.execute();
    } else logger.info('Wrong test runner');
})();
