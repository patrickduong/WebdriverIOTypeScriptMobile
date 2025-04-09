import allureReporter from "@wdio/allure-reporter";
import addtriggerPage from "../pages/addtrigger.page";
import commonPage from "../pages/common.page";
import macroPage from "../pages/macro.page";

describe("Verify that the user is able to add a macro", () => {
  allureReporter.addFeature("Add marcro");
  it("should able to add marco type trigger", async () => {
    // allureReporter.addTestId("Add marcro type trigger");
    await commonPage.clickSkipButton();
    await commonPage.clickByDescription("Navigate up");
    await commonPage.openMacros();
    await macroPage.clickAddMarcoButton();
    await macroPage.clickAddTriggerButton();
    await addtriggerPage.addTriggerType(
      "Applications",
      "App Install/Remove/Update",
      "Application Removed",
      "Any Application"
    );

    await expect(macroPage.isMarcroEntryNameDisplayed("Application Removed"))
      .toBeTruthy;
    await expect(macroPage.isMarcroEntryDetailDisplayed("Any Application"))
      .toBeTruthy;
  });
});
