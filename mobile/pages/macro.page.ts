import BasePage from "./base.page";

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

  async isMarcroEntryNameDisplayed(expectedMacroEntryName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name" and @text="${expectedMacroEntryName}"]`
    ).isDisplayed();
  }

  async isMarcroEntryDetailDisplayed(expectedMacroEntryDetail: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_detail" and @text="${expectedMacroEntryDetail}"]`
    ).isDisplayed();
  }
}

export default new MarcroPage();
