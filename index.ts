

export type currentStatus = {
    id: number
    model_name: string
    progress: number
    accuracy: number
    cost: number
    time_taken: number
}

import run from "./components/tables"
import q from "./questions/test.json" assert { type: "json" }
import { models } from "./constants"
import { ModelManager } from "./ModelManager"

function runTest(){
    
}