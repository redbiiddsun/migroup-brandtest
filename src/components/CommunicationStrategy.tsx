import { TFunction } from "i18next";

export default function CommunicationStrategy({ data, t }: { data: summaryData, t: TFunction<"common", undefined> }) {
  return (
    <>
      <div className="pt-9">
        <div className="text-2xl text-orange">{t('SectionC.titleC')}</div>
        <p>
          {`${t('SectionC.commuStraTitle')} ${data?.animalDetail?.C?.communicationStrategy}`}
        </p>

        <li>
          {`${t('SectionC.mediaStraTitle')} ${data?.animalDetail?.C?.mediaStrategy}`}
        </li>
        <li>
          {`${t('SectionC.avoidMediaStraTitle')} ${data?.animalDetail?.C?.mediaStrategyToAvoid}`}
        </li>
        <li>
          {`${t('SectionC.medaiSelecTitle')} ${data?.animalDetail?.C?.mediaSelections}`}
        </li>
      </div>
    </>
  );
}
