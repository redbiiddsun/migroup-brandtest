import { TFunction } from "i18next";

export default function MarketingStrategy({data, t}: {data: summaryData, t: TFunction<"common", undefined>}) {

  return (
    <>
      <div className="pt-9">
        <div className="text-2xl text-green">{t('SectionB.titleB')}</div>
        <p>{data?.animalDetail?.B?.description}</p>
        <div>
          <p>{t('SectionB.exampleTitleB')}</p>
          
          {data?.animalDetail?.B?.marketingStrategy.map(
            (result, index) => (
              <li key={index}>{result}</li>
            )
          )}
          <br></br>
        </div>
        <div>
          <p>{t('SectionB.avoidMarketingTitle')}</p>
          {data?.animalDetail?.B?.avoidMarketingStrategy.map(
            (result, index) => (
              <li key={index}>{result}</li>
            )
          )}
          <br></br>
        </div>
        <div>
          <p>{t('SectionB.trendsToCaptureTitle')}</p>
          {data?.animalDetail?.B?.trendsToCapture.map(
            (result, index) => (
              <li key={index}>{result}</li>
            )
          )}
        </div>
        <br></br>
        <div>
          <p>{t('SectionB.trendsToAvoidTitle')}</p>
          {data?.animalDetail?.B?.trendsToAvoid.map(
            (result, index) => (
              <li key={index}>{result}</li>
            )
          )}
          <br></br>
        </div>
      </div>
    </>
  );
}
