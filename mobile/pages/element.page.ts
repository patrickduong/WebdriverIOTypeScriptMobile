import BasePage from "./base.page";

class PageElements extends BasePage {
  get appNameHeader() {
    return $("android.widget.TextView");
  }

  async clickSkipButton() {
    await this.openUsingResourceID("com.arlosoft.macrodroid:id/button_skip");
  }

  async clickNextButton() {
    await this.openUsingResourceID("com.arlosoft.macrodroid:id/button_next");
  }

  async openHome() {
    await this.openUsingResourceID(
      "com.arlosoft.macrodroid:id/navigation_home"
    );
  }

  async openMacros() {
    await this.openUsingResourceID(
      "com.arlosoft.macrodroid:id/navigation_macro_list"
    );
  }

  async scrollHorizontally() {
    await this.scrollHorizontally();
  }
}
export default new PageElements();
