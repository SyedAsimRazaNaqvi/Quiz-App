import { FormEvent } from "react"

export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: "easy"
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiz = {
    question: string
    answer: string
    correct_answer: string
    options: string[]
}


export type QuestionProps = {
    question: string
    options: string[]
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
}