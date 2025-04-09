import BasePage from "./base.page";
class AddTriggerPage extends BasePage {
  async addTriggerType(
    typeTrigger: string,
    selecType: string,
    option: string,
    subOption: string
  ) {
    await this.clickByText(typeTrigger);
    switch (selecType) {
      case "App Install/Remove/Update":
        await this.clickByText(selecType);
        await this.clickByText(option);
        await this.clickByText("OK");
        await this.clickByText(subOption);
        await this.clickByText("OK");
        break;
      //handle more cases here
      default:
        throw new Error("Other trigger type not support");
    }
  }
}

export default new AddTriggerPage();
