import { DateTimeDataHelper } from "../../utils/datetime-data-helper";
import {
  ActionType,
  ContraintType,
  LocalVariableType,
  TriggerType,
} from "../dataobject/macro.types";
import actionblockPage from "../pages/actionblock.page";
import addactionPage from "../pages/addaction.page";
import addcontraintPage from "../pages/addcontraint.page";
import addlocalvariablePage from "../pages/addlocalvariable.page";
import addtriggerPage from "../pages/addtrigger.page";
import commonPage from "../pages/common.page";
import macroPage from "../pages/macro.page";
import { CUSTOM_WAIT } from "../static/constants";

describe("Marcodroid features test", () => {
  const generateTestDate = new DateTimeDataHelper();
  before("Go to macro page", async () => {
    await commonPage.clickSkipButton();
    await commonPage.clickByDescription("Navigate up");
    await commonPage.openMacros();
    await macroPage.clickAddMarcoButton();
  });
  context(
    "TC 1: Verify that the user is able to add a macro (dont need to add macro name) (add 3 macros)",
    () => {
      it("should able to add marco type trigger", async () => {
        const TestMarcoTriggerData: TriggerType = {
          typeTrigger: "Applications",
          selecType: "App Install/Remove/Update",
          option: "Application Removed",
          subOption: "Any Application",
        };

        await macroPage.clickAddTriggerButton();
        await addtriggerPage.addTriggerType(
          TestMarcoTriggerData.typeTrigger,
          TestMarcoTriggerData.selecType,
          TestMarcoTriggerData.option,
          TestMarcoTriggerData.subOption
        );

        await expect(
          macroPage.isEntryNameDisplayed(TestMarcoTriggerData.option)
        ).toBeTruthy;
        await expect(
          macroPage.isEntryDetailDisplayed(TestMarcoTriggerData.subOption)
        ).toBeTruthy;
      });

      it("should able to add marco type Action", async () => {
        const TestMacroActionData: ActionType = {
          typeAction: "Logging",
          selecType: "Clear Log",
          option: "System Log",
        };
        await macroPage.clickAddActionButton();
        await addactionPage.addActionType(
          TestMacroActionData.typeAction,
          TestMacroActionData.selecType,
          TestMacroActionData.option
        );

        await expect(
          macroPage.isEntryNameDisplayed(TestMacroActionData.selecType)
        ).toBeTruthy;
        await expect(
          macroPage.isEntryDetailDisplayed(TestMacroActionData.option)
        ).toBeTruthy;
      });

      it("should able to add marco type Contraint", async () => {
        const TestMacroContraintData: ContraintType = {
          typeAction: "Device State",
          selecType: "Airplane Mode",
          option: "Airplane Mode Disabled",
        };
        await macroPage.clickAddConstraintsButton();
        await addcontraintPage.addContraintType(
          TestMacroContraintData.typeAction,
          TestMacroContraintData.selecType,
          TestMacroContraintData.option
        );

        await expect(
          macroPage.isEntryNameDisplayed(TestMacroContraintData.option)
        ).toBeTruthy;
        await expect(
          macroPage.isEntryDetailDisplayed(TestMacroContraintData.option)
        ).toBeTruthy;
      });

      it("should able to add marco type Variable", async () => {
        const TestMacroLocalVariableData: LocalVariableType = {
          variableName: ["Test Case"],
          variableType: "Integer",
          variableValue: 8,
        };
        await macroPage.clickAddLocalVariableButton();
        await macroPage.clickAddANewLocalVariableButton();
        await addlocalvariablePage.addNewVariable(
          TestMacroLocalVariableData.variableName,
          TestMacroLocalVariableData.variableType
        );

        await expect(
          macroPage.isEntryNameDisplayed(
            TestMacroLocalVariableData.variableName[0]
          )
        ).toBeTruthy;
        await addlocalvariablePage.updateVariableValue(
          TestMacroLocalVariableData.variableName[0],
          TestMacroLocalVariableData.variableType,
          TestMacroLocalVariableData.variableValue
        ); //keycode 8 = 1 https://developer.android.com/reference/android/view/KeyEvent#KEYCODE_1
        await expect(macroPage.isEntryDetailDisplayed("1")).toBeTruthy;
      });
    }
  );
  context(
    "TC 2: Verify that the user is able to add an action blocks (add 3 action blocks)",
    () => {
      const todayDate = generateTestDate.getFormattedDateWithOffset("days", 0);
      it("should able to create a new block action", async () => {
        const testBlockActionName = `Test Action Block Name ${todayDate}`;
        const testBlockActionDesc = "Test Action Block Description";

        await commonPage.clickBackButton();
        await commonPage.clickByText("DISCARD");
        await commonPage.openHome();
        await commonPage.clickByText("Action Blocks");
        await actionblockPage.clickAddAcctionBlockPlusIcon();

        await actionblockPage.enterActionBlockName([testBlockActionName]);
        await actionblockPage.isActionBlockNameDisplayed(testBlockActionName);
        await actionblockPage.enterActionBlockDescription([
          testBlockActionDesc,
        ]);
        await actionblockPage.isActionBlockDescDisplayed(testBlockActionDesc);

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

        await expect(
          actionblockPage.isEntryNameDisplayed("Input Variable Boolean")
        ).toBeTruthy;
        await expect(actionblockPage.isEntryDetailDisplayed("Default: True"))
          .toBeTruthy;

        await actionblockPage.addAActionType(
          "Logging",
          "Clear Log",
          "System Log"
        );
        await expect(actionblockPage.isEntryNameDisplayed("Clear Log"))
          .toBeTruthy;
        await expect(actionblockPage.isEntryDetailDisplayed("System Log"))
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

        await expect(
          actionblockPage.isEntryNameDisplayed("Output Variable String")
        ).toBeTruthy;
        await expect(
          actionblockPage.isEntryDetailDisplayed(
            "Default: This is a testing string"
          )
        ).toBeTruthy;

        await actionblockPage.clickAcceptButton();

        await actionblockPage.isItemNameDisplayed(testBlockActionName);
        await actionblockPage.isItemDescDisplayed(testBlockActionDesc);

        // need add expect for blockName and BlockDescription
      });
    }
  );
  context(
    "TC 3: Verify that the user is able to add a macro from Home - Add Macro Wizard",
    () => {
      it("should able to create a new block action", async () => {
        await commonPage.clickByDescription("Navigate up");
        await commonPage.handleSkipAdVideo(CUSTOM_WAIT.VERY_SLOW_WAIT);
        await commonPage.openHome();
        await commonPage.clickByText("Add Macro Wizard");
        // focus on selected tab
        // reuse action on trigger, Actions, Contraints
      });
    }
  );
});
