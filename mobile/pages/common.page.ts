import BasePage from "./base.page";

class Common extends BasePage {
  get appNameHeader() {
    return $("android.widget.TextView");
  }
}
export default new Common();
