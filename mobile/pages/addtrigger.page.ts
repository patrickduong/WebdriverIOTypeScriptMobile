import BasePage from "./base.page";
class AddTriggerPage extends BasePage {
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

  async addTriggerType(
    typeTrigger: string,
    selecType: string,
    option: string,
    subOption: string
  ) {
    await this.selectCategory(typeTrigger);
    switch (selecType) {
      case "App Install/Remove/Update":
        await this.selectItemName(selecType);
        await this.selectOption(option);
        await this.confirmSelectOption("OK");
        await this.selectOption(subOption);
        await this.confirmSelectOption("OK");
        break;
      //handle more cases here
      default:
        throw new Error("Other trigger type not support");
    }
  }
}

export default new AddTriggerPage();
