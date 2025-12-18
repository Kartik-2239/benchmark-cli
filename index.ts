type question =  {
    question: string,
    answers: [string],
    negative_answers: [string]
}

export type currentStatus = {
    model_name: string
    progress: number
    accuracy: number
    cost: number
}

const data: currentStatus[] = [
  {
    model_name: "vision-transformer-v1",
    progress: 82,
    accuracy: 8.7,
    cost: 12.4
  },
  {
    model_name: "text-classifier-lite",
    progress: 45,
    accuracy: 6.3,
    cost: 4.1
  },
  {
    model_name: "speech-recognition-pro",
    progress: 91,
    accuracy: 9.2,
    cost: 18.9
  },
  {
    model_name: "recommendation-engine",
    progress: 67,
    accuracy: 7.8,
    cost: 9.6
},
{
    model_name: "anomaly-detector",
    progress: 29,
    accuracy: 5.4,
    cost: 2.7
}
]

import run from "./components/tables"
import q from "./questions/test.json" assert { type: "json" }
import { models } from "./constants"

// Loop over models and then
// initialize a currentStatus for that models
// loop over questions and edit the status

var tableData:currentStatus[] = []

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

for (const model of models){
    var status: currentStatus= {
        model_name: model.name,
        progress: 0,
        accuracy: 0,
        cost: 0
    };
    for (const question of q){
        status.accuracy += 1
        status.cost += 4
        status.progress =  ((q.indexOf(question)+1)/q.length)*100
        run([status, ...tableData])
        await sleep(1000)
    }
    
    tableData.push(status)
}
