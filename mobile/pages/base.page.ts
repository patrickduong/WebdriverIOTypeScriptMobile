import { APP_PACKAGE } from "../static/constants";

export default class BasePage {
  findByTextContains(partialText: string) {
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

  async openUsingResourceID(resourceID: string) {
    await $(`android=new UiSelector().resourceId("${resourceID}")`).click();
  }

  async openUsingPackage(packageName: string) {
    await driver.startActivity(APP_PACKAGE, packageName);
  }
}
