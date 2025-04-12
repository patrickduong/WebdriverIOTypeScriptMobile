export class DateTimeDataHelper {
  getFormattedDateWithOffset(offsetType: any, offsetValue: number): string {
    const today = new Date();

    switch (offsetType) {
      case "days":
        today.setDate(today.getDate() + offsetValue);
        break;
      case "weeks":
        today.setDate(today.getDate() + offsetValue * 7);
        break;
      case "months":
        today.setMonth(today.getMonth() + offsetValue);
        break;
      case "years":
        today.setFullYear(today.getFullYear() + offsetValue);
        break;
      default:
        throw new Error(
          'Invalid offset type. Use "days", "weeks", "months", or "years".'
        );
    }

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
}
