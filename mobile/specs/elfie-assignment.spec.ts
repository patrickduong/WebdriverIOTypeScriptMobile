import actionblockPage from "../pages/actionblock.page";
import addactionPage from "../pages/addaction.page";
import addcontraintPage from "../pages/addcontraint.page";
import addlocalvariablePage from "../pages/addlocalvariable.page";
import addtriggerPage from "../pages/addtrigger.page";
import commonPage from "../pages/common.page";
import macroPage from "../pages/macro.page";

describe("TC 1: Verify that the user is able to add a macro (dont need to add macro name) (add 3 macros)", () => {
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
    await addlocalvariablePage.updateVariableValue("Test Case", "Integer", 8); //keycode 8 = 1 https://developer.android.com/reference/android/view/KeyEvent#KEYCODE_1
    await expect(macroPage.isMarcroEntryDetailDisplayed("1")).toBeTruthy;
  });

  it("TC 2: Verify that the user is able to add an action blocks (add 3 action blocks)", async () => {
    await commonPage.clickBackButton();
    await commonPage.clickByText("DISCARD");
    await commonPage.openHome();
    await commonPage.clickByText("Action Blocks");
    await actionblockPage.clickAddAcctionBlockPlusIcon();

    await actionblockPage.enterActionBlockName(["Test Action Block Name"]);
    await actionblockPage.enterActionBlockDescription([
      "Test Action Block Description",
    ]);

    // need add expect for blockName and BlockDescription
    await actionblockPage.addAcctionBlockVariable(
      "input",
      ["Input Variable Boolean"],
      "Boolean"
    );

    await actionblockPage.updateAVariableType(
      "Input Variable Boolean",
      "Boolean",
      "true"
    );

    // need add expect for input value

    await actionblockPage.addAActionType("Logging", "Clear Log", "System Log");
    await expect(macroPage.isMarcroEntryNameDisplayed("Clear Log")).toBeTruthy;
    await expect(macroPage.isMarcroEntryDetailDisplayed("System Log"))
      .toBeTruthy;

    await actionblockPage.addAcctionBlockVariable(
      "output",
      ["Output Variable String"],
      "String"
    );

    await actionblockPage.updateAVariableType(
      "Output Variable String",
      "String",
      ["This is a testing string"]
    );

    // need add expect for output value

    await actionblockPage.clickAcceptButton();

    // need add expect for blockName and BlockDescription
  });
});
