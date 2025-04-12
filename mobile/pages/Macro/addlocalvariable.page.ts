import BasePage from "../base.page";
class AddLocalVariablePage extends BasePage {
  async enterVariableName(variableName: string[]) {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/variable_new_variable_dialog_name")`
    ).sendKeys(variableName);
  }

  async selectVariableType(variableType: string) {
    await $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/variable_new_variable_type_spinner")`
    ).click();

    await this.clickByText(variableType);
  }

  async updateVariableValue(
    variableName: string,
    variableType: string,
    variableValue: any
  ) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name" and @text="${variableName}"]`
    ).click();
    switch (variableType) {
      case "String":
        await $(
          `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`
        ).sendKeys(variableValue);
        break;
      case "Integer":
        await $(
          `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`
        ).clearValue();
        await $(
          `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`
        ).pressKeyCode(variableValue);
        break;
      case "Decimal":
        await $(
          `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`
        ).pressKeyCode(variableValue);
        break;
      case "Boolean":
        await $(
          `//android.widget.RadioButton[@resource-id="com.arlosoft.macrodroid:id/${variableValue}Radio"]`
        ).click();
        break;
      //handle more cases here
      default:
        throw new Error("Other variable type not support");
    }

    await this.clickByText("OK");
  }

  async addNewVariable(variableName: string[], variableType: string) {
    await this.enterVariableName(variableName);
    await this.selectVariableType(variableType);
    await this.clickByText("OK");
  }
}

export default new AddLocalVariablePage();
