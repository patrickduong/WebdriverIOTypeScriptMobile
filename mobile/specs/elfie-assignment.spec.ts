import addactionPage from "../pages/addaction.page";
import addcontraintPage from "../pages/addcontraint.page";
import addlocalvariablePage from "../pages/addlocalvariable.page";
import addtriggerPage from "../pages/addtrigger.page";
import commonPage from "../pages/common.page";
import macroPage from "../pages/macro.page";

describe("Verify that the user is able to add a macro", () => {
  before("Go to macro page", async () => {
    await commonPage.clickSkipButton();
    await commonPage.clickByDescription("Navigate up");
    await commonPage.openMacros();
    await macroPage.clickAddMarcoButton();
  });

  it("should able to add marco type trigger", async () => {
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

  it("should able to add marco type Action", async () => {
    await macroPage.clickAddActionButton();
    await addactionPage.addActionType("Logging", "Clear Log", "System Log");

    await expect(macroPage.isMarcroEntryNameDisplayed("Clear Log")).toBeTruthy;
    await expect(macroPage.isMarcroEntryDetailDisplayed("System Log"))
      .toBeTruthy;
  });

  it("should able to add marco type Contraint", async () => {
    await macroPage.clickAddConstraintsButton();
    await addcontraintPage.addContraintType(
      "Device State",
      "Airplane Mode",
      "Airplane Mode Disabled"
    );

    await expect(macroPage.isMarcroEntryNameDisplayed("Airplane Mode Disabled"))
      .toBeTruthy;
    await expect(
      macroPage.isMarcroEntryDetailDisplayed("Airplane Mode Disabled")
    ).toBeTruthy;
  });

  it("should able to add marco type Variable", async () => {
    await macroPage.clickAddLocalVariableButton();
    await macroPage.clickAddANewLocalVariableButton();
    await addlocalvariablePage.addNewVariable(["Test Case"], "Integer");

    await expect(macroPage.isMarcroEntryNameDisplayed("Test Case")).toBeTruthy;

    await macroPage.clickByText("Test Case");
    await addlocalvariablePage.updateVariableValue(["Test Case"], 1);
    await expect(macroPage.isMarcroEntryDetailDisplayed("1")).toBeTruthy;
  });
});
