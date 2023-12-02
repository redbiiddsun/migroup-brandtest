import { useRouter } from 'next/router'
import SurveyComponent from "@/components/SurveyComponent"
import { highInvolvementProducts } from "@/utils/questions/highEN";
import { highInvolvementProductsTH } from "@/utils/questions/highTH";



export default function HighProducts() {

    const { locale } = useRouter();
    let data;

    if(locale == 'en'){
        data = highInvolvementProducts
    }else{
        data = highInvolvementProductsTH
    }
    return (
        <SurveyComponent model={data} />
    )
}