import BasePage from "./base.page";

class Common extends BasePage {
  get appNameHeader() {
    return $("android.widget.TextView");
  }

  async clickSkipButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/button_skip");
  }

  async clickNextButton() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/button_next");
  }

  async openHome() {
    await this.clickByResourceID("com.arlosoft.macrodroid:id/navigation_home");
  }

  async openMacros() {
    await this.clickByResourceID(
      "com.arlosoft.macrodroid:id/navigation_macro_list"
    );
  }

  async scrollHorizontally() {
    await this.scrollHorizontally();
  }
}
export default new Common();
