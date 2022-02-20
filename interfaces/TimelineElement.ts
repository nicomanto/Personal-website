export default interface TimeLineElement {
  readonly date: DateTimeLine;
  readonly iconType: string;
  readonly i18nParam: string;
  readonly websiteURL: string;
}

interface DateTimeLine {
  readonly date: string;
  readonly currentI18n: boolean;
}
