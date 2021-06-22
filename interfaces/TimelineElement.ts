export default interface TimeLineElement {
  readonly date: DateTimeLine;
  readonly icon: string;
  readonly i18nParam: string;
}

interface DateTimeLine {
  readonly date: string;
  readonly presentI18n: boolean;
}
