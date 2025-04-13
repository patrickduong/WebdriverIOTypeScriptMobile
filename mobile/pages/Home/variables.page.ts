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

  async deleteCellVariableByName(cellVariableName: string) {
    await $(
      `//android.widget.TextView[@text='${cellVariableName}']/following-sibling::android.widget.ImageButton[@content-desc="Delete"]`
    ).click();

    await this.clickByText("OK");
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
    await this.searchField.hideKeyboard();
  }

  async closeSearchField() {
    (await this.closeSearchButton).click();
    (await this.closeSearchButton).click();
  }

  async filterVariableType(variableType: string) {
    if (!(await addlocalvariablePage.variableTypeSpinner.isDisplayed())) {
      (await this.filterButton).click();
      await this.clickByText(variableType);
    }
    await this.clickByText(variableType);
  }

  async addNewHomeVariable(variableName: string[], variableType: string) {
    await this.clickImageButton("Add Category");
    await addlocalvariablePage.addNewVariable(variableName, variableType);
  }
}

export default new AddHomeVariablePage();
