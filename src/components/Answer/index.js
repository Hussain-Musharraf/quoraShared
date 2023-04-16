import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/image/Quora-logo.png"
import "./answer.css"
import { QuestionContext } from "../context/QuestionContext"
const Answer = () => {

    let [getFlag,setFlag] = useState(false);
    let value = React.useContext(QuestionContext);
    let ansArr=Object.entries(value.getquestion);

    let [getTypeQuestion, setTypeQuestion] = useState('');

    let ans;
    const navigate = useNavigate();
    const handleQuestionClick = (question) =>{
        console.log(question)
        setTypeQuestion(question);
        // console.log(getTypeQuestion);
        setFlag(true);
        const txtArea= document.getElementById("txtArea");
        txtArea.focus();
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        //alert("Hello")
        ans = e.target[0].value;
        console.log(e.target[0].value);
       value.addQuestionAns(getTypeQuestion,ans);
       navigate('/');
    }

  return (
    <div>
        <div className="qsnimg">
            <img src={logo} alt="logo" width="130"/>
        </div>
        <form onSubmit={handleSubmit} className="ans">
            <div className="arrDiv">
                <h1>Select Question</h1>
                {ansArr.map( ([key, value])=>(
                    <h3 key={key} className="qsn_ans" onClick={()=>handleQuestionClick(key)}>{key}</h3>
                ))}
            </div>
            <div  className="ansBox">
                {getFlag?<h1>Type your answer here</h1>:''}
                <textarea id="txtArea" cols="80" rows="10" placeholder="Type your answer here ............." />
                <input type="submit" value="Add answer" />
            </div>
        </form>
    </div>
  )
}

export default Answer