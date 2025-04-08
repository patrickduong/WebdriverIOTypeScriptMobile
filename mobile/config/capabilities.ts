import { ANDROID_APP_PATH } from "../static/pathConstants";

export const androidDeviceCapabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "14",
    "appium:deviceName": "Android",
    "appium:systemPort": 8200,
    "appium:automationName": "UiAutomator2",
    "appium:app": ANDROID_APP_PATH,
    "appium:noReset": false,
    "appium:newCommandTimeout": 30,
    "appium:autoGrantPermissions": true,
    "appium:avd": "Pixel_3",
    "appium:avdLaunchTimeout": 180000,
  },
];

export const androidMultiDeviceCapabilities = [
  ...androidDeviceCapabilities,
  {
    platformName: "Android",
    "appium:platformVersion": "14",
    "appium:deviceName": "Android",
    "appium:systemPort": 8201,
    "appium:automationName": "UiAutomator2",
    "appium:app": ANDROID_APP_PATH,
    "appium:noReset": false,
    "appium:newCommandTimeout": 30,
    "appium:autoGrantPermissions": true,
    "appium:avd": "Pixel_3",
    "appium:avdLaunchTimeout": 180000,
  },
];
