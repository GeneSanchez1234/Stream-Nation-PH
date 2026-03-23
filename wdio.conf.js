require('dotenv').config();
const path = require('path');

exports.config = {
    runner: 'local',
    specs: [],
    exclude: [],

    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Device',
        'appium:udid': process.env.ANDROID_UDID || 'wccixk7pk7roamdy',
        'appium:appPackage': 'com.streamnation.fina.uat',
        'appium:appActivity': 'com.streamnation.fina.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': false,
        'appium:newCommandTimeout': 300
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    autoCompileOpts: {
        autoCompile: false
    },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    onPrepare: function (config, capabilities) {
        const fs = require('fs');
        const path = require('path');
        const artifactsDir = path.join(__dirname, 'test-artifacts');

        if (fs.existsSync(artifactsDir)) {
            fs.rmSync(artifactsDir, { recursive: true, force: true });
        }

        fs.mkdirSync(path.join(artifactsDir, 'screenshots'), { recursive: true });
        fs.mkdirSync(path.join(artifactsDir, 'recordings'), { recursive: true });
    },
    beforeTest: async function () {
        await driver.startRecordingScreen();
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        const safeTitle = test.title.replace(/\s+/g, '_').replace(/\//g, '_');
        const status = passed ? 'PASSED' : 'FAILED';
        const fs = require('fs');

        // Save Screenshot for ALL tests
        const screenshotPath = path.join(__dirname, 'test-artifacts/screenshots', `${status}_${safeTitle}_${timestamp}.png`);
        await browser.saveScreenshot(screenshotPath);

        // Save Video for ALL tests
        const videoBase64 = await driver.stopRecordingScreen();
        const videoPath = path.join(__dirname, 'test-artifacts/recordings', `${status}_${safeTitle}_${timestamp}.mp4`);
        const videoBuffer = Buffer.from(videoBase64, 'base64');
        fs.writeFileSync(videoPath, videoBuffer);

        // Save Page Source for ALL tests
        const source = await driver.getPageSource();
        const sourcePath = path.join(__dirname, 'test-artifacts/recordings', `${status}_${safeTitle}_${timestamp}.xml`);
        fs.writeFileSync(sourcePath, source);

        console.log(`📸 Screenshot saved: ${screenshotPath}`);
        console.log(`🎥 Recording saved: ${videoPath}`);
        console.log(`📄 Page source saved: ${sourcePath}`);
    }
}
