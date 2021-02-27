import { QuestionType,Quiz } from '../Type/QuizTypes'

const suffleQuiz = (array: any[]) => [...array].sort(() => Math.random() - 0.5)

export const fetchData = async (total: number, level: string): Promise<Quiz[]> => {
    const alldata = await fetch(`https://opentdb.com/api.php?amount=10`)
    console.log(alldata)
    const response = await fetch(`https://opentdb.com/api.php?amount=${total}&difficulty=${level}&category=18&type=multiple`)
    let { results } = await response.json();
    let quiz: Quiz[] = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer:questionObj.correct_answer,
            options: suffleQuiz(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}
