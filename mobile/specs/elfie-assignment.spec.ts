import elementsPage from "../pages/element.page";
import * as constants from "../static/constants";

describe("elfie tests", () => {
  it("should validate app name", async () => {
    await expect(elementsPage.appNameHeader).toHaveText(constants.APP_HEADER);
  });
});
