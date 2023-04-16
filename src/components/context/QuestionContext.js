import React, { useState,createContext } from 'react'
export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
    const [getquestion, setQuestion] = useState([]);
    const [getQuestionAns, setQuestionAns] = useState([]);

    const addQuestion = (key, value)=>{
        setQuestion({...getquestion,[key]: value});
        // console.log(getquestion)
    }

    const addQuestionAns=(key1,val1)=>{
      setQuestionAns({...getQuestionAns,[key1]:val1})
    }
  return (
    <QuestionContext.Provider value={{getquestion, addQuestion,addQuestionAns,getQuestionAns}}>
        {props.children}
    </QuestionContext.Provider>
  )
}