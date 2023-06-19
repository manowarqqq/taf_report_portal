import mochaConfig from '../config/mochaConfig.json';
import Mocha from 'mocha';
import Jasmine from 'jasmine';
import path from 'path';
import {TestConfig} from '../data/testConfig';
import {logger} from '../utils/logger/logger';
import {testSuits} from '../config/suits';
// import * as Jasmine from 'jasmine';

(async () => {
    let suit: string;
    let files: string[];
    const [, , ...args] = process.argv;
    try {
        args.forEach((e, i) => {
            if (e === '-f') suit = args[i + 1];
        });
        files = testSuits[suit as keyof typeof testSuits].suitFiles;
    } catch (error: any) {
        logger.error(`Files with key ${suit} not found`, error?.message);
    }

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
