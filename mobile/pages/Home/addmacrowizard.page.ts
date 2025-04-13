import {
  ActionType,
  ContraintType,
  TriggerType,
} from "../../dataobject/macro.types";
import BasePage from "../base.page";
import addactionPage from "../Macro/addaction.page";
import addcontraintPage from "../Macro/addcontraint.page";
import addtriggerPage from "../Macro/addtrigger.page";
class AddMacroWizardPage extends BasePage {
  async selectTabMarcroWizard(tabName: string) {
    this.clickByDescription(tabName);
  }
  async addMacroTypeFull(
    triggerType: TriggerType,
    actionType: ActionType,
    constraintType: ContraintType
  ) {
    await this.selectTabMarcroWizard("Triggers");
    await addtriggerPage.addTriggerType(
      triggerType.typeTrigger,
      triggerType.selecType,
      triggerType.option,
      triggerType.subOption
    );

    await this.selectTabMarcroWizard("Actions");
    await addactionPage.addActionType(
      actionType.typeAction,
      actionType.selecType,
      actionType.option
    );
    await this.selectTabMarcroWizard("Constraints");
    await addcontraintPage.addContraintType(
      constraintType.typeAction,
      constraintType.selecType,
      constraintType.option
    );
  }

  async addMarcoNameWithCategory(marcroName: string[], marcroCategory: string) {
    await this.clickImageButton("Accept");
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/enter_name_and_category_spinner"
    );
    await this.clickByText(marcroCategory);
    await this.enterMarcroName(marcroName);
    await this.clickByText("OK");
  }

  async enterMarcroName(marcroName: string[]) {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/enter_name_and_category_name")`
    ).click();
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/enter_name_and_category_name")`
    ).sendKeys(marcroName);
  }

  async isMarcroItemTypeCreated(expectedItemType: string) {
    switch (expectedItemType) {
      case "trigger":
        await $(
          `android=new UiSelector().className("android.widget.ImageView").instance(2)`
        ).isDisplayed();
        break;
      case "action":
        await $(
          `android=new UiSelector().className("android.widget.ImageView").instance(3)`
        ).isDisplayed();
        break;
      case "constraint":
        await $(
          `android=new UiSelector().className("android.widget.ImageView").instance(4)`
        ).isDisplayed();
        break;
      default:
        throw new Error("Support only for trigger, action, and constraint");
    }
  }
}

export default new AddMacroWizardPage();
