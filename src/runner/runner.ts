import mochaConfig from '../config/mochaConfig.json';
import Mocha from 'mocha';
import Jasmine from 'jasmine';
import path from 'path';
import {TestConfig} from '../data/testConfig';
import {logger} from '../utils/logger/logger';
// import * as Jasmine from 'jasmine';

(async () => {
    const [, , ...files] = process.argv;

    if (TestConfig.getRunner() === 'mocha') {
        const runner = new Mocha(mochaConfig);
        files.forEach((file) => runner.addFile(path.join(file)));
        runner.run();
    } else if (TestConfig.getRunner() === 'jasmine') {
        const testRunner = new Jasmine({projectBaseDir: __dirname});
        testRunner.loadConfigFile('../config/jasmineConfig.json');
        await testRunner.execute();
    } else logger.info('Wrong test runner');
})();
