export type model = {
    id: number,
    name: string,
    model: string,
    reasoning: boolean
}

export type currentStatus = {
    id: number
    model_name: string
    progress: number
    accuracy: number
    input_tokens: number,
    output_tokens: number,
    cost: number,
    time_taken: number,
    pending: boolean
}

export type question = {
    question: string,
    answers: string[],
    negative_answers?: string[]
}

export type response = {
    answer: string,
    cost: number,
    input_tokens: number,
    output_tokens: number,
    time_taken: number
}

