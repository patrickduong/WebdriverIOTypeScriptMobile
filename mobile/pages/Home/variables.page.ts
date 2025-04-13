import BasePage from "../base.page";
import addlocalvariablePage from "../Macro/addlocalvariable.page";

class AddHomeVariablePage extends BasePage {
  get searchButton() {
    return $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/search_button")`
    );
  }

  get searchField() {
    return $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/search_src_text")`
    );
  }

  get closeSearchButton() {
    return $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/search_close_btn")`
    );
  }

  get filterButton() {
    return $(
      `android=new UiSelector().resourceId("com.arlosoft.macrodroid:id/menu_filter")`
    );
  }

  async removeCellVariableByName(cellVariableName: string) {
    await $(
      `//*[@text='${cellVariableName}']/following-sibling::android.widget.ImageButton`
    ).click();
    this.clickByText("OK");
  }

  async isCellVariableNameDisplayed(expectedCellVariableName: string) {
    await $(
      `//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/variable_cell_variable_name" and @Text="${expectedCellVariableName}"]`
    ).isDisplayed();
  }

  async searchVariableName(variableName: string[]) {
    if (!(await this.searchField.isDisplayed())) {
      (await this.searchButton).click();
    }
    (await this.searchField).click();
    (await this.searchField).sendKeys(variableName);
    driver.hideKeyboard();
  }

  async closeSearchField() {
    if (await this.searchField.isDisplayed()) {
      (await this.closeSearchButton).click();
    }
  }

  async filterVariableType(variableType: string) {
    if (!(await addlocalvariablePage.variableTypeSpinner.isDisplayed())) {
      (await this.filterButton).click();
    }
    (await addlocalvariablePage.variableTypeSpinner).click();
    this.clickByText(variableType);
  }

  async addNewHomeVariable(variableName: string[], variableType: string) {
    addlocalvariablePage.addNewVariable(variableName, variableType);
  }
}

export default new AddHomeVariablePage();
