import { ANDROID_APP_PATH } from "../static/pathConstants";

export const androidDeviceCapabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "12",
    "appium:deviceName": "emulator-5554",
    "appium:systemPort": 8210,
    "appium:automationName": "UiAutomator2",
    "appium:app": ANDROID_APP_PATH,
    "appium:noReset": false,
    "appium:newCommandTimeout": 30,
    "appium:autoGrantPermissions": true,
    "appium:avd": "Pixel_4a_API_31",
    "appium:avdLaunchTimeout": 180000,
  },

  // {
  //   platformName: "Android",
  //   "appium:platformVersion": "14",
  //   "appium:deviceName": "R58W50C049H",
  //   "appium:systemPort": 8240,
  //   "appium:automationName": "UiAutomator2",
  //   "appium:app": ANDROID_APP_PATH,
  //   "appium:noReset": false,
  //   "appium:newCommandTimeout": 30,
  //   "appium:autoGrantPermissions": true,
  //   "appium:avdLaunchTimeout": 180000,
  // },
];

export const androidMultiDeviceCapabilities = [
  ...androidDeviceCapabilities,
  // {
  //   platformName: "Android",
  //   "appium:platformVersion": "12",
  //   "appium:deviceName": "emulator-5556",
  //   "appium:systemPort": 8220,
  //   "appium:automationName": "UiAutomator2",
  //   "appium:app": ANDROID_APP_PATH,
  //   "appium:noReset": false,
  //   "appium:newCommandTimeout": 30,
  //   "appium:autoGrantPermissions": true,
  //   "appium:avd": "Pixel_7a_API_31",
  //   "appium:avdLaunchTimeout": 180000,
  // },
];
