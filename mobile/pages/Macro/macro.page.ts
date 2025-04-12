import BasePage from "../base.page";

class MarcroPage extends BasePage {
  get appNameHeader() {
    return $("android.widget.TextView");
  }

  async clickAddMarcoButton() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/macro_list_add_button"
    );
  }

  async clickAddTriggerButton() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/edit_macro_addTriggerButton"
    );
  }

  async clickAddActionButton() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/edit_macro_addActionButton"
    );
  }

  async clickAddConstraintsButton() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/edit_macro_addConstraintButton"
    );
  }

  async clickAddLocalVariableButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/localVarsLabel");
  }

  async clickAddANewLocalVariableButton() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/addVariableButton"
    );
  }

  async isMarcroCategoryDisplayed(expectedCategoryName: string) {
    await $(
      `android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/group_title" and @Text="${expectedCategoryName}"]`
    ).isDisplayed();
  }

  async isMarcroNameDisplayed(expectedMarcoName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macroNameText" and @Text="${expectedMarcoName}"]`
    ).isDisplayed();
  }

  async isMarcroTriggerDisplayed(expectedTriggerName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macroTrigger" and @Text="${expectedTriggerName}"]`
    ).isDisplayed();
  }

  async isMarcroActionDisplayed(expectedActionName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macroActions" and @Text="${expectedActionName}"]`
    ).isDisplayed();
  }

  async isMarcroConstraintDisplayed(expectedConstraintName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macroConstraints" and @Text="${expectedConstraintName}"]`
    ).isDisplayed();
  }
}
export default new MarcroPage();
