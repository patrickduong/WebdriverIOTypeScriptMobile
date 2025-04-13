import BasePage from "../base.page";
class AddLocalVariablePage extends BasePage {
  get variableTypeSpinner() {
    return $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/variable_new_variable_type_spinner")`
    );
  }

  get variableDialogName() {
    return $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/variable_new_variable_dialog_name")`
    );
  }

  get variableDialogValue() {
    return $(
      `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`
    );
  }

  async enterVariableName(variableName: string[]) {
    await this.variableDialogName.sendKeys(variableName);
  }

  async selectVariableType(variableType: string) {
    await this.variableTypeSpinner.click();
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
        await this.variableDialogValue.sendKeys(variableValue);
        break;
      case "Integer":
        await this.variableDialogValue.clearValue();
        await this.variableDialogValue.pressKeyCode(variableValue);
        break;
      case "Decimal":
        await this.variableDialogValue.pressKeyCode(variableValue);
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
