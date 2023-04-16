import "./question.css"
import logo from "../../assets/image/Quora-logo.png"
import React, {useState } from "react"
import {useNavigate} from "react-router-dom"
import { QuestionContext } from "../context/QuestionContext"

const Question = () => {
  let value = React.useContext(QuestionContext);
 // const [getInput,setInput] = useState('');
  // const handleChange = (e)=>{
  //   setInput(e.target.value);
  //   console.log(getInput)
  // }
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target[0].value)
    value.addQuestion(e.target[0].value);
    navigate('/')
  }
  return (
    <div>
        <div className="qsnimg">
            <img src={logo} alt="logo" width="130"/>
        </div>
        
        <form onSubmit={handleSubmit} className="qsn">
            <div>
                <input id="input1" placeholder="Question: Type your question here.........."/>
            </div>
            <div className="qsnbtn">
                <input type="submit" id="input2" value="Add question"/>
            </div>
       </form>
    </div>
  )
}

export default Question;














// const handleBack = ()=>{
  //   navigate('/');
  // }
  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   const newQuestion = e.target.question.value;
  //   setQuestions(prevQuestions =>[...prevQuestions, newQuestion]);
  // }

  // useEffect( ()=>{
  //   localStorage.setItem('questions', JSON.stringify(questions));
  // }, [questions]);
