import { TFunction } from "i18next";

export default function Descriptions({data, t}: {data: summaryData, t: TFunction<"common", undefined>}) {

  return (
    <>
      <div className="">
        <div className="text-2xl text-blue">{t('SectionA.titleA')}</div>
        <p>{data?.animalDetail?.A?.description}</p>
        <li>{`${t('SectionA.titleA')} ${data?.animalDetail?.A?.example}`}</li>
        <li>{`${t('SectionA.exampleTitleA')} ${data?.animalDetail?.A?.metaphor}`}</li>
        <li>{`${t('SectionA.strengthsTitle')} ${data?.animalDetail?.A?.strengths}`}</li>
        <li>{`${t('SectionA.weaknessesTitle')} ${data?.animalDetail?.A?.weaknesses}`}</li>
      </div>
    </>
  );
}
