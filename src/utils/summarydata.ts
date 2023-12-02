import { calculateAnimal } from '@/utils/calculateAnimal'
import { extractKeys, extractValues } from './objExtract';

// Static Result File 
import { resultTH } from './result/result-th';
import { resultEN } from './result/result-en';


/**
 * Create a data before sent to the page
 * @param {query{}} query - Array of scores for different areas.
 * @returns {{animal: string, chartData: {label: string, query:{id: number, label:[string], data:[string]}}}}
 *      - the data before sent to page .
 */
export default function summaryData(query: result, locale: string): summaryData{
    
    const animal = calculateAnimal(extractValues(query));
    const animalKey = animal as  keyof typeof resultTH
    let animalDetail;
  
      // Prepare result data
      if (locale == "th") {
        animalDetail = resultTH[animalKey]
      } else {
        animalDetail = resultEN[animalKey];
      }
  
      // Validate undefined
    //   if(animalDetail == undefined){ animalDetail = null }
  

    return {
      animal,
      ...animalDetail,
      chartData: {
        labels: extractKeys(query),
        datasets: {
          id: 1,
          label: animal,
          data: extractValues(query),
        }
      },
    };
  }