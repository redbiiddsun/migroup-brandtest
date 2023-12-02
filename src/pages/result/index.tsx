import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps, GetStaticProps } from 'next'

import { useTranslations } from 'next-intl';


import ChartComponent from "@/component/chartComponent";

// Component
// import Iconic from "@/component/Iconic";
// import Descriptions from "@/component/description";
// import MarketingStrategy from "@/component/marketingStrategy";
// import CommunicationStrategy from "@/component/CommunicationStrategy";
// import MiGroupRole from "@/component/MIGroup";

export const getStaticProps: GetStaticProps = async (context) => {
    
    return {
        props: {
            messages: (await import(`../../../public/locales/${context.locale}.json`)).default,
            data: {}
        }
    }
}


export default function resultPage({ message, data }: any) {

    const t = useTranslations();
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
                        src={message?.animalDetail?.image}
                        className="absolute top-0 left-0 z-10 lg:rounded-2xl md:rounded-2xl"
                    />
                    <div className="sticky w-full z-30">
                        {/* <Iconic img={data?.animalDetail.logo} data={data}/> */}
                        <div className="text-base pt-3 px-3 md:px-28 lg:px-52 text-center">
                            {message?.animalDetail?.shortdescription}
                        </div>
                        <div className="text-center">
                            <div className="text-xl lg:text-24 pt-9">
                                {t('titleA')}
                            </div>
                            <div className="text-2xl text-indigo">
                                {message?.animalDetail?.brandChart}
                            </div>
                        </div>
                        <div className="mx-0  lg:px-44">
                            {/* <ChartComponent data={data} className="px-4" /> */}
                        </div>
                    </div>
                    <div className="px-9 pb-9">
                        {/* <Descriptions data={data} topic={...uiEN}/>
                        <MarketingStrategy data={data} topic={...uiEN} />
                        <CommunicationStrategy data={data} topic={...uiEN} />
                        <MiGroupRole data={data} topic={...uiEN}/> */}
                    </div>
                </div>
            </div>
        </>
    );
}
