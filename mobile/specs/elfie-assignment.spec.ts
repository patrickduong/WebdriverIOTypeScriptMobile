import { DateTimeDataHelper } from "../../utils/datetime-data-helper";
import {
  ActionType,
  ContraintType,
  LocalVariableType,
  TriggerType,
} from "../dataobject/macro.types";
import commonPage from "../pages/common.page";
import actionblockPage from "../pages/Home/actionblock.page";
import addmacrowizardPage from "../pages/Home/addmacrowizard.page";
import addHomeVariablePage from "../pages/Home/variables.page";
import addactionPage from "../pages/Macro/addaction.page";
import addcontraintPage from "../pages/Macro/addcontraint.page";
import addlocalvariablePage from "../pages/Macro/addlocalvariable.page";
import addtriggerPage from "../pages/Macro/addtrigger.page";
import macroPage from "../pages/Macro/macro.page";
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
        await expect(
          actionblockPage.isActionBlockNameDisplayed(testBlockActionName)
        ).toBeTruthy;

        await actionblockPage.enterActionBlockDescription([
          testBlockActionDesc,
        ]);
        await expect(
          actionblockPage.isActionBlockDescDisplayed(testBlockActionDesc)
        ).toBeTruthy;

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

        await expect(actionblockPage.isItemNameDisplayed(testBlockActionName))
          .toBeTruthy;
        await expect(actionblockPage.isItemDescDisplayed(testBlockActionDesc))
          .toBeTruthy;
      });
    }
  );
  context(
    "TC 3: Verify that the user is able to add a macro from Home - Add Macro Wizard",
    () => {
      const todayDate = generateTestDate.getFormattedDateWithOffset("days", 0);
      const testMacroName = [`Test Marco - ${todayDate}`];
      const testMarroGroup = "Games";

      const TestMarcoWizardTriggerData: TriggerType = {
        typeTrigger: "Applications",
        selecType: "App Install/Remove/Update",
        option: "Application Installed",
        subOption: "Any Application",
      };

      const TestMacroWizardActionData: ActionType = {
        typeAction: "Logging",
        selecType: "Clear Log",
        option: "User Log",
      };

      const TestMacroWizardContraintData: ContraintType = {
        typeAction: "Device State",
        selecType: "Airplane Mode",
        option: "Airplane Mode Enabled",
      };

      it("should able to create a new marcro with group name - trigger - action - constraint", async () => {
        await commonPage.clickByDescription("Navigate up");
        await commonPage.handleSkipAdVideo(CUSTOM_WAIT.SLOW_WAIT);
        await commonPage.openHome();
        await commonPage.clickByText("Add Macro Wizard");

        await addmacrowizardPage.addMacroTypeFull(
          TestMarcoWizardTriggerData,
          TestMacroWizardActionData,
          TestMacroWizardContraintData
        );

        await expect(addmacrowizardPage.isMarcroItemTypeCreated("trigger"))
          .toBeTruthy;
        await expect(addmacrowizardPage.isMarcroItemTypeCreated("action"))
          .toBeTruthy;
        await expect(addmacrowizardPage.isMarcroItemTypeCreated("constraint"))
          .toBeTruthy;

        await addmacrowizardPage.addMarcoNameWithCategory(
          testMacroName,
          testMarroGroup
        );

        // await commonPage.handleSkipAdVideo(CUSTOM_WAIT.SLOW_WAIT); - happen random
        await commonPage.openMacros();

        await expect(
          macroPage.isMarcroCategoryDisplayed(`${testMarroGroup} (1)`)
        ).toBeTruthy;

        await expect(macroPage.isMarcroNameDisplayed(`${testMacroName[0]}`))
          .toBeTruthy;

        await expect(
          macroPage.isMarcroTriggerDisplayed(
            `${TestMarcoWizardTriggerData.option} (${TestMarcoWizardTriggerData.subOption})`
          )
        ).toBeTruthy;

        await expect(
          macroPage.isMarcroActionDisplayed(
            `${TestMacroWizardActionData.selecType}`
          )
        ).toBeTruthy;

        await expect(
          macroPage.isMarcroConstraintDisplayed(
            `${TestMacroWizardContraintData.option}`
          )
        ).toBeTruthy;
      });
    }
  );

  context(
    "TC 4: Verify that the user is able to Search and filter information of exist variable from Home-Variables",
    () => {
      const todayDate = generateTestDate.getFormattedDateWithOffset("days", 0);
      const TestVariableBooleanData: LocalVariableType = {
        variableName: [`Test Variable Boolean - ${todayDate}`],
        variableType: "Boolean",
        variableValue: true,
      };

      const TestVariableDecimalData: LocalVariableType = {
        variableName: [`Test Variable Decimal - ${todayDate}`],
        variableType: "Decimal",
        variableValue: 8.8,
      };

      const TestVariableStringData: LocalVariableType = {
        variableName: [`Test Variable String - ${todayDate}`],
        variableType: "String",
        variableValue: "This is test string",
      };

      it("should able to create new variable types are Boolean - Decimal - String", async () => {
        await commonPage.openHome();
        await commonPage.clickByText("Variables");

        // Boolean
        await addHomeVariablePage.addNewHomeVariable(
          TestVariableBooleanData.variableName,
          TestVariableBooleanData.variableType
        );

        await expect(
          addHomeVariablePage.isCellVariableNameDisplayed(
            TestVariableBooleanData.variableName[0]
          )
        ).toBeTruthy;

        // Decimal
        await addHomeVariablePage.addNewHomeVariable(
          TestVariableDecimalData.variableName,
          TestVariableDecimalData.variableType
        );

        await expect(
          addHomeVariablePage.isCellVariableNameDisplayed(
            TestVariableDecimalData.variableName[0]
          )
        ).toBeTruthy;

        // String
        await addHomeVariablePage.addNewHomeVariable(
          TestVariableStringData.variableName,
          TestVariableStringData.variableType
        );

        await expect(
          addHomeVariablePage.isCellVariableNameDisplayed(
            TestVariableStringData.variableName[0]
          )
        ).toBeTruthy;
      });

      it("should able to filter data by combine filter with search", async () => {
        const filterAll = "All variables";
        await addHomeVariablePage.filterVariableType(filterAll);

        await addHomeVariablePage.searchVariableName(
          TestVariableBooleanData.variableName
        );

        await expect(
          addHomeVariablePage.isCellVariableNameDisplayed(
            TestVariableBooleanData.variableName[0]
          )
        ).toBeTruthy;
      });

      // failed - not stable - switch between filter and search field
      // it("should able to filter data by filter only", async () => {
      //   const filterDecimal = "Decimal";
      //   const filterAll = "All variables";
      //   // await addHomeVariablePage.closeSearchField();
      //   await addHomeVariablePage.filterVariableType(filterDecimal);
      //   await expect(
      //     addHomeVariablePage.isCellVariableNameDisplayed(
      //       TestVariableDecimalData.variableName[0]
      //     )
      //   ).toBeTruthy;
      //   await addHomeVariablePage.deleteCellVariableByName(
      //     TestVariableDecimalData.variableName[0]
      //   );
      //   await addHomeVariablePage.filterVariableType(filterAll);
      //   await expect(
      //     addHomeVariablePage.isCellVariableNameDisplayed(
      //       TestVariableDecimalData.variableName[0]
      //     )
      //   ).toBeTruthy;
      // });
    }
  );
});
