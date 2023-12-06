import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { totalPoint } from '@/utils/result'
import { Theme } from "@/theme/theme"
import { useRouter } from "next/router";
import { Converter } from "showdown";


/**
 * Renders a survey component.
 * @param model - The question model for the survey.
 * @returns The rendered survey component.
 */
export default function SurveyComponent({ model }: { model: Question }) {

    const router = useRouter()

    const survey = new Model(model);
    survey.applyTheme(Theme);

    //Create showdown markdown converter
    var converter = new Converter();
    survey.onTextMarkdown.add(function(survey, options){
        //convert the markdown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    });

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