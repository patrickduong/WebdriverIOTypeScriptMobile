# WebdriverIOTypeScriptMobile

reference & Updated from: https://github.com/sadabnepal/web-mobile-api-test-framework/

## 1. Install Appium Server

    npm install -g appium [ install appium CLI version ]
    npm install -g appium-doctor [ install appium doctor ]
    appium --version [ To check appium version ]

## 2. Verify drivers

    appium driver list [ To check available drivers ]
    appium driver install uiautomator2 [ install android driver]
    appium driver install xcuitest [ install ios driver]

## 3. Setup Android SDK path environment variables

- ANDROID_HOME = <path to Sdk folder>
- %ANDROID_HOME%\tools [path variable]
- %ANDROID_HOME%\tools\bin [path variable]
- %ANDROID_HOME%\platform-tools [path variable]

## 4. Setup/Create virtual device on Android studio:

1. Open Android Studio
2. Click on More Actions

- --> AVD Manager
- --> Create Virtual Device
- --> Select the device and OS version [ Refer Device Configurations ]
- --> Finish

3. Once Virtual device is created, click on Launch this AVD in the emulator.
4. Command to view the list of devices attached `adb devices`

## 5. Device Configurations:

see the `wdio.conf.parallel.ts` and `config/capabilities.ts`

## 6. Verify all setup

    appium-doctor --android [ To check Android set up ]
    appium-doctor --ios [ To check ios set up ]

## 7. How to use framework (need to done all steps from #1 to #6 )

1. Open terminal
2. Change directory to /mobile
3. Type appium server with command -> appium
4. Open new terminal or split current terminal
5. Type following options for execution
   - npm run test -> run single device (need to comment all other capabilities in `config/capabilities.ts`)
   - npm run test:parallel -> run multiple devices (need to uncomment all other capabilities in `config/capabilities.ts`)
6. Wait for execution done to check the result.

## NOTE

- Make sure that the dependencies version of node modules inside /mobile are same number with @wdio package (`ex: 8.36.0`) - some package version are default installed with latest version that could impact the other one
- This framework orginally work for mocha - no steps setup for allure yet. Which mean it need to add more works before we can using the allure report -> check the config in `wdio.conf.ts`
- This framework can run parallel with vitual devices. However, it need to improve the thread node turnel between appium client and server - I encountered the issue that the init steps running multiple times on ADV - not happen on real devices
- This framework is still need to improve for assigning test suit with gather `ammount of test files - *.spec` and `assign to specific devices to run parallel.`
- The executor.js file is just a tooling for running the command about via cli - `Special thank to sadabnepal for providing this approach`
