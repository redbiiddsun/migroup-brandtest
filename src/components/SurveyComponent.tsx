import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { totalPoint } from '@/utils/result'
import { Theme } from "@/theme/theme"
import { useRouter } from "next/router";


/**
 * Renders a survey component.
 * @param model - The question model for the survey.
 * @returns The rendered survey component.
 */
export default function SurveyComponent({ model }: { model: Question }) {

    const router = useRouter()

    const survey = new Model(model);
    survey.applyTheme(Theme);

    survey.onComplete.add((sender, options) => {

        // Calulate total point and return as a resultType
        const data = totalPoint(sender.data, model.type)

        
        if (router.locale == 'th') {

            router.push({
                pathname: '/result',
                query: data,
            })

        }
        else {
            router.push({
                pathname: '/result',
                query: data,
            })
        }

    });

    return (<Survey model={survey} />);
}