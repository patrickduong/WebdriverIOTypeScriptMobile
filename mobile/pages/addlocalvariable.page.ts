import BasePage from "./base.page";
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

    // await $(
    //   `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${variableType}"]`
    // ).click();
    await this.clickByText(variableType);
  }

  async updateVariableValue(variabbleName: string[], variableValue: number) {
    await $(
      `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/variable_name" and @text="${variabbleName}"]`
    ).click();
    await $(
      `//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`
    ).pressKeyCode(variableValue);
    await this.clickByText("OK");
  }

  async addNewVariable(variableName: string[], variableType: string) {
    await this.enterVariableName(variableName);
    await this.selectVariableType(variableType);
    await this.clickByText("OK");
    // await this.confirmSelectOption("OK");
  }
}

export default new AddLocalVariablePage();
