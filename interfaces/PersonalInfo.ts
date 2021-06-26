import { IconBaseProps } from "react-icons";

export interface Social {
  readonly icon: IconBaseProps;
  readonly url: string;
}

export interface PersonalInfoForList {
  readonly title: string;
  readonly icon: IconBaseProps;
  readonly i18nParam: string;
}
