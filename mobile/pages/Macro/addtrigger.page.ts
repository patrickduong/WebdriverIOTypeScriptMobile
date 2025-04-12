import BasePage from "../base.page";
class AddTriggerPage extends BasePage {
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
