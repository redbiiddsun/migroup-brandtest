import Image from "next/image";
import type { GetServerSideProps, } from 'next'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import summaryData from "@/utils/summarydata";

// Components
import Header from "@/components/Header";
import ChartComponent from "@/components/ChartComponent";
import Descriptions from "@/components/Description";
import MarketingStrategy from "@/components/MarketingStrategy";
import CommunicationStrategy from "@/components/CommunicationStrategy";
import MiGroupRole from "@/components/MIGroup";


export const getServerSideProps: GetServerSideProps = async (context) => {

    let somthing: result = {
        BrandPerception: Number(context.query.BrandPerception),
        BrandValue: Number(context.query.BrandValue),
        MarketEngagement: Number(context.query.MarketEngagement),
        CustomerRelationship: Number(context.query.CustomerRelationship),
        ProductExcellence: Number(context.query.ProductExcellence),
    };

    const data = summaryData(somthing, context.locale ?? 'en')

    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? 'en')),
            data: data
        },
    };
};


export default function Page({ data }: { data: summaryData }) {

    const { t } = useTranslation('common')

    return (
        <>
            <div className="bg-lightgrey min-h-[100vh] h-auto py-0 md:py-14 md:px-20 xl:px-60 content-center">
                <div className="relative bg-white h-auto w-auto lg:rounded-2xl lg:shadow-xl md:rounded-2xl md:shadow-xl content-center">
                    <Image
                        width={10000}
                        height={10000}
                        alt="wave"
                        src="/assets/Wave.png"
                        className="absolute top-0 left-0 z-20 lg:rounded-2xl md:rounded-2xl"
                    />
                    <Image
                        width={10000}
                        height={10000}
                        alt="background"
                        src={data?.animalDetail?.image}
                        className="absolute top-0 left-0 z-10 lg:rounded-2xl md:rounded-2xl"
                    />
                    <div className="sticky w-full z-30">
                        <Header title={t('title')} img={data?.animalDetail?.logo} data={data} />
                        <div className={`text-base pt-3 px-7 md:px-28 lg:px-52 text-center`} >
                            {data?.animalDetail?.shortdescription}
                        </div>
                        <div className="text-center">
                            <div className="text-xl lg:text-24 pt-9">
                                {t('brandchartTitle')}
                            </div>
                            <div className={`px-8 text-2xl text-indigo`} style={{color: data?.animalDetail?.color}}>
                                {data?.animalDetail?.brandChart}
                            </div>
                        </div>
                        <div className="mx-0  lg:px-44">
                            <ChartComponent data={data} className="px-4" />
                        </div>
                    </div>
                    <div className="px-9 pb-9">
                        <Descriptions data={data} t={t} />
                        <MarketingStrategy data={data} t={t} />
                        <CommunicationStrategy data={data} t={t} />
                        <MiGroupRole data={data} t={t} />
                    </div>
                </div>
            </div>
        </>
    );
}

