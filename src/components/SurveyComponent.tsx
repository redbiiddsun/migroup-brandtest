import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { totalPoint } from '../../utills/result'
import { Theme } from "@/theme/theme"


export default function SurveyComponent({model}) {

    const survey = new Model(model);
    survey.applyTheme(Theme);
    
    survey.onComplete.add((sender, options) => {
        // const data = totalPoint(sender.data, model.type)

        // if(model.locale == 'th'){
        //     document.location.replace(`../result/th?BrandPerception=${data.BrandPerception}&BrandValue=${data.BrandValue}&MarketEngagement=${data.MarketEngagement}&CustomerRelationship=${data.CustomerRelationship}&ProductExcellence=${data.ProductExcellence}`)
        // }
        // else{
        //     document.location.replace(`../result/en?BrandPerception=${data.BrandPerception}&BrandValue=${data.BrandValue}&MarketEngagement=${data.MarketEngagement}&CustomerRelationship=${data.CustomerRelationship}&ProductExcellence=${data.ProductExcellence}`)
        // }

    });

    return (<Survey model={survey} />);
}