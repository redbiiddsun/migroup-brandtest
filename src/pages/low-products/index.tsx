import { useRouter } from 'next/router'

import SurveyComponent from "@/components/SurveyComponent"
import { lowInvolvementProducts } from "@/utils/questions/lowEN";
import { lowInvolvementProductsTH } from "@/utils/questions/lowTH";

export default function LowProducts() {

    const { locale } = useRouter();
    let data;

    if(locale == 'en'){
        data = lowInvolvementProducts
    }else{
        data = lowInvolvementProductsTH
    }

    return (
        <SurveyComponent model={data} />
    )
}