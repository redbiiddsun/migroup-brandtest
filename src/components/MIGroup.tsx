import { TFunction } from "i18next";

export default function MiGroupRole({ data, t }: { data: summaryData, t: TFunction<"common", undefined> }) {
  return (
    <>
      <div className="pt-9">
        <div className="text-2xl text-purple">{t('SectionD.titleD')}</div>
        <p>{`${t('SectionD.strengthTitle')} ${data?.animalDetail?.D?.strength}`}</p>
        <p>{t('SectionD.mistrengthTitle')}</p>
        <li>{`${t('SectionD.leverageTitle')} ${data?.animalDetail?.D?.MIGrouptoStrength?.leverage}`} </li>
        <li>{`${t('SectionD.implementTitle')} ${data?.animalDetail?.D?.MIGrouptoStrength?.implementation}`}</li>
        <p>{`${t('SectionA.weaknessesTitle')} ${data?.animalDetail?.D?.weakness}`}</p>
        <p>{t('SectionD.miWeaknessesTitle')}</p>
        <li>{`${t('SectionD.implementTitle')} ${data?.animalDetail?.D?.MIGrouptoStrength?.implementation}`}</li>
      </div>
    </>
  );
}
