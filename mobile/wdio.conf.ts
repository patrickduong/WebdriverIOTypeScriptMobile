import type { Options } from "@wdio/types";
import { androidDeviceCapabilities } from "./config/capabilities";
import { JSON_OUTPUT_DIR } from "./static/pathConstants";

export const config: Options.Testrunner = {
  // =====================
  // ts-node Configurations
  // =====================
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },
  // ====================
  // Runner Configuration
  // ====================
  port: 4723,
  // ==================
  // Specify Test Files
  // ==================
  specs: ["./specs/**/*.ts"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  // ============
  // Capabilities
  // ============
  maxInstances: 10,
  capabilities: androidDeviceCapabilities,
  // ===================
  // Test Configurations
  // ===================
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["appium"],
  framework: "mocha",
  // specFileRetries: 1,
  // specFileRetriesDelay: 0,
  reporters: [
    // [
    //   "allure",
    //   {
    //     outputDir: "allure-results",
    //     disableWebdriverStepsReporting: true,
    //     disableWebdriverScreenshotsReporting: true,
    //   },
    // ],
    // ,
    "spec",
    [
      "json",
      {
        outputDir: JSON_OUTPUT_DIR,
        outputFileFormat: (opts: any) => {
          return `results-${opts.cid}.${opts.capabilities.platformName}.json`;
        },
      },
    ],
  ],
  mochaOpts: {
    compilers: [],
    ui: "bdd",
    timeout: 300000,
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await driver.takeScreenshot();
    }
  },

  // onComplete: function () {
  //   const reportError = new Error("Could not generate Allure report");
  //   const generation = allure(["generate", "allure-results", "--clean"]);
  //   return new Promise<void>((resolve, reject) => {
  //     const generationTimeout = setTimeout(() => reject(reportError), 5000);

  //     generation.on("exit", function (exitCode) {
  //       clearTimeout(generationTimeout);

  //       if (exitCode !== 0) {
  //         return reject(reportError);
  //       }

  //       console.log("Allure report successfully generated");
  //       resolve();
  //     });
  //   });
  // },
  onComplete: function (exitCode, config, capabilities, results) {
    const mergeResults = require("@wdio/json-reporter/mergeResults");
    mergeResults(JSON_OUTPUT_DIR, "results-*");
  },
  onReload: function (oldSessionId, newSessionId) {},
};
