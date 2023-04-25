// import {installation, RunnerHelper, setMyAppVersion, switchOnCanaryFeaturePreRun, switchOffCanaryFeaturePreRun} from './runnerHelper';
// import {ValidationHelper} from '../helpers/validationHelper';
// import ProcessManager from '@tr/eikon-driver/src/utils/processManager';
// import {UserEnum} from '../types/usersType';
// import {AppVersionsEnum} from '../enums/versionsTypes';
// import {TestRailService} from '../servers/testrail/testrailService';
// import {TestrailApi} from '../servers/testrail/testrailApi';
// import {TestConfig} from '../setup/containerTypes';
// import {SettingsServer} from '../servers/settingsServer';
// import {PackageConfig} from '../setup/packageConfig';
// import {GlobalHelper} from '../helpers/globalHelper';
// const Runner = require('mocha/lib/runner');
// const Mocha = require('mocha/lib/mocha');
// const SpecReporter = require('mocha/lib/reporters/spec');
// const originalRun = Runner.prototype.run;
// const originalMocha = Mocha.prototype.run;
//
// export function start(conf: any) {
//     Mocha.prototype.run = async function (done: any) {
//         originalMocha.call(this, done);
//     };
//
//     Runner.prototype.run = async function (done: any) {
//         originalRun.call(this, done);
//     };
// }
// start(TestConfig.getConfig());
