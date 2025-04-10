import { APP_PACKAGE } from "../static/constants";

export default class BasePage {
  async clickSkipButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/button_skip");
  }

  async clickNextButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/button_next");
  }

  async clickBackButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/actionBack");
  }

  async openHome() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/navigation_home");
  }

  async openMacros() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/navigation_macro_list"
    );
  }

  async findByTextContains(partialText: string) {
    return $(`android=new UiSelector().textContains("${partialText}")`);
  }

  async scrollAndClickByText(text: string) {
    await $(
      `android=new UiScrollable(new UiSelector()).scrollTextIntoView("${text}")`
    ).click();
  }

  async scrollHorizontally() {
    await $(
      "android=new UiScrollable(new UiSelector()).setAsHorizontalList().scrollForward(2)"
    );
  }

  async clickByResourceID(resourceID: string) {
    await $(`android=new UiSelector().resourceId("${resourceID}")`).click();
  }

  async clickByDescription(desciption: string) {
    await $(`android=new UiSelector().description("${desciption}")`).click();
  }

  async clickByText(text: string) {
    await $(`android=new UiSelector().text("${text}")`).click();
  }

  async getTextValueWithResourceID(resourceID: string, attributeType: string) {
    await $(
      `android=new UiSelector().resourceId("${resourceID}")`
    ).getAttribute(`"${attributeType}"`);
  }

  async confirmSelectOption(confirm: String) {
    if (confirm == "OK")
      await $(
        `android=new UiSelector().resourceId("android:id/button1")`
      ).click();
    else
      await $(
        `android=new UiSelector().resourceId("android:id/button2")`
      ).click();
  }

  async openUsingPackage(packageName: string) {
    await driver.startActivity(APP_PACKAGE, packageName);
  }

  async selectOption(optionItem: string) {
    await $(
      `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${optionItem}"]`
    ).click();
  }

  async selectCategory(categoryName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/category_name" and @text="${categoryName}"]`
    ).click();
  }

  async selectItemName(itemName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/select_item_name" and @text="${itemName}"]`
    ).click();
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

  async clickAcceptButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/acceptButton");
  }
}
