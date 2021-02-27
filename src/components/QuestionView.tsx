import React, { useState } from 'react'
import { QuestionProps } from '../Type/QuizTypes'
import '../App.css'

const QuestionView: React.FC<QuestionProps> = ({ question, options, callback }) => {

    let [userAns, setUserAns] = useState("")

    const onSelect = (e: any) => {
        setUserAns(e.target.value)
    }

    return (
        <div className="main-container">
            <div>
                <h3>{question}</h3>

                <form onSubmit={(e)=>callback(e,userAns) } >
                    {options.map((option, ind) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type="radio" name="option" checked={userAns===option} value={option} onChange={onSelect} required /> {option}
                                </label>
                            </div>
                        )
                    })}
                    <input type='submit' />
                </form>
            </div>
        </div>
    )
}

export default QuestionView
