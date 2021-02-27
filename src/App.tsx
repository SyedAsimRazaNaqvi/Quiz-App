import React, { useEffect, useState } from 'react';
import './App.css';

import { fetchData } from './Services/QuizApi';
import { Quiz } from './Type/QuizTypes'
import QuestionView from './components/QuestionView'

function App() {
  let [quiz, setQuiz] = useState<Quiz[]>([])
  let [currentQuestion, setCurrentQuestion] = useState<number>(0)
  let [score, setScore] = useState<number>(0)
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const current = quiz[currentQuestion]
    if (userAns === current.correct_answer) {
      setScore(++score)
    }
    if (currentQuestion !== quiz.length - 1)
      setCurrentQuestion(++currentQuestion)
    else {
      alert("Your Score is: " + score + " Out of " + quiz.length);
      setCurrentQuestion(0)
      setScore(0)
    }
  }

  useEffect(() => {
    async function QuizData() {
      const questions: Quiz[] = await fetchData(10, 'easy');
      setQuiz(questions)
    }

    QuizData();
  }, [])

  if (!quiz.length) {
    return <h3 style={{textAlign:"center"}}>Loading...</h3>
  }

  return (
    <div >
      <QuestionView
        question={quiz[currentQuestion].question}
        options={quiz[currentQuestion].options}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
