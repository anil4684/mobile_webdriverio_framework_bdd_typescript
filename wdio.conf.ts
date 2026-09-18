import path from 'node:path';

export const config: WebdriverIO.Config = {

    runner: 'local',

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    tsConfigPath: './tsconfig.json',

    specs: [
        './test/features/**/*.feature'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '8.0',
        'appium:deviceName': 'emulator-5554',
        'appium:udid': 'emulator-5554',

        'appium:app': path.join(
            process.cwd(),
            'app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'
        ),

        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': '.SplashActivity',
        'appium:adbExecTimeout': 60000
    }],

    logLevel: 'debug',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,

    services: [],

    framework: 'cucumber',

    reporters: [
          'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }]
           ],

    cucumberOpts: {
        require: [
        './test/step-definitions/**/*.ts'

       ],

        backtrace: true,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: true,
        tags: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};