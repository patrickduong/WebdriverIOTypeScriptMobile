import BasePage from "../base.page";
class AddContraintsPage extends BasePage {
  async addContraintType(
    typeAction: string,
    selecType: string,
    option: string
  ) {
    await this.selectCategory(typeAction);
    switch (selecType) {
      case "Airplane Mode":
        await this.selectItemName(selecType);
        await this.selectOption(option);
        await this.confirmSelectOption("OK");
        break;
      //handle more cases here
      default:
        throw new Error("Other Contraint type not support");
    }
  }
}

export default new AddContraintsPage();
