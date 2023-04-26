import mochaConfig from '../config/mochaConfig.json'
import Mocha from 'mocha';
import path from 'path';


const runner = new Mocha(mochaConfig);

runner.addFile(path.join(__dirname,'../../test/reportPortalTests.js'));
runner.run();
