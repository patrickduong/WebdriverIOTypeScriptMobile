import BasePage from "../base.page";
import addactionPage from "../Macro/addaction.page";
import addlocalvariablePage from "../Macro/addlocalvariable.page";
class AddActionBlockPage extends BasePage {
  async clickAddAcctionBlockPlusIcon() {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/fab")`
    ).click();
  }

  async clickAddInputVariableButton() {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/addInputVariableButton")`
    ).click();
  }

  async clickExpandInputVariableButton() {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/inputCollapseExpandButton")`
    ).click();
  }

  async clickAddOutputVariableButton() {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/addOutputVariableButton")`
    ).click();
  }

  async clickExpandOutputVariableButton() {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/outputCollapseExpandButton")`
    ).click();
  }

  async enterActionBlockName(actionBlockName: string[]) {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/actionBlockNameText")`
    ).click();
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/actionBlockNameText")`
    ).sendKeys(actionBlockName);
  }

  async enterActionBlockDescription(actionBlockDesription: string[]) {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/description")`
    ).click();
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/description")`
    ).sendKeys(actionBlockDesription);
  }

  async addAcctionBlockVariable(
    variableType: string,
    variableName: string[],
    variableSubType: string
  ) {
    if (variableType == "input") {
      await this.clickExpandInputVariableButton(); //handle for expand to see Input variable
      await this.clickAddInputVariableButton();
      await addlocalvariablePage.addNewVariable(variableName, variableSubType);
    } else if (variableType == "output") {
      await this.clickExpandOutputVariableButton(); //handle for expand to see Output variable
      await this.clickAddOutputVariableButton();
      await addlocalvariablePage.addNewVariable(variableName, variableSubType);
    }
  }

  async clickAddActionItem() {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/addActionButton")`
    ).click();
  }

  async addAActionType(typeAction: string, selecType: string, option: string) {
    await this.clickAddActionItem();
    await addactionPage.addActionType(typeAction, selecType, option);
  }

  async updateAVariableType(
    variableName: string,
    variableType: string,
    variableValue: any
  ) {
    await addlocalvariablePage.updateVariableValue(
      variableName,
      variableType,
      variableValue
    );
  }

  async isActionBlockNameDisplayed(expectedActionBlockName: string) {
    await $(
      `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/actionBlockNameText" and @text="${expectedActionBlockName}"]`
    ).isDisplayed();
  }

  async isActionBlockDescDisplayed(expectedActionBlockDesc: string) {
    await $(
      `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/description" and @text="${expectedActionBlockDesc}"]`
    ).isDisplayed();
  }
}

export default new AddActionBlockPage();
