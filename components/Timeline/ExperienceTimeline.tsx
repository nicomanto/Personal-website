import React from "react";
import { useTranslation } from "react-i18next";
import { IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import TimeLineElement from "../../interfaces/TimelineElement";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  timeLineElementList: TimeLineElement[];
};

const ExperienceTimeline = ({ timeLineElementList }: Props) => {
  const { t } = useTranslation(["timeline"]);

  return (
    <VerticalTimeline>
      {timeLineElementList.map((element) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={element.date.presentI18n ? element.date.date + t("present") : element.date.date}
            icon={element.iconType === "education" ? <IoSchoolOutline /> : <IoBriefcaseOutline />}
          >
            <h3 className="vertical-timeline-element-title">{t(`${element.i18nParam}.title`)}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t(`${element.i18nParam}.place`)}
            </h4>
            <p>{t(`${element.i18nParam}.description`)}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
