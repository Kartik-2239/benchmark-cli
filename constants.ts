export type model = {
    id: number,
    name: string,
    model: string,
    reasoning: boolean
}

export const evaluator : model = {
    id: 1,
    name: "gpt-oss-120b",
    model: "openai/gpt-oss-120b",
    reasoning: true
}

export const questionMaker:model = {
    id: 1,
    name: "gpt-oss-120b",
    model: "openai/gpt-oss-120b",
    reasoning: true
}

export const models : model[] = [
    {
        id: 1,
        name: "gpt-oss-120b",
        model: "openai/gpt-oss-120b",
        reasoning: true
    },
    {
        id: 2,
        name: "gpt-5.2",
        model: "openai/gpt-5.2",
        reasoning: true
    },
    {
        id: 3,
        name: "claude-opus-4.5",
        model: "anthropic/claude-opus-4.5",
        reasoning: true
    },
    {
        id: 4,
        name: "claude-sonnet-4.5",
        model: "anthropic/claude-sonnet-4.5",
        reasoning: true
    },
    {
        id: 5,
        name: "gemini-3-pro",
        model: "google/gemini-3-pro",
        reasoning: true
    },
    {
        id: 6,
        name: "gemini-3-flash",
        model: "google/gemini-3-flash",
        reasoning: false
    }
]

