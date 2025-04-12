import BasePage from "../base.page";
class AddActionPage extends BasePage {
  async addActionType(typeAction: string, selecType: string, option: string) {
    await this.selectCategory(typeAction);
    switch (selecType) {
      case "Clear Log":
        await this.selectItemName(selecType);
        await this.selectOption(option);
        await this.confirmSelectOption("OK");
        break;
      //handle more cases here
      default:
        throw new Error("Other Action type not support");
    }
  }
}

export default new AddActionPage();
