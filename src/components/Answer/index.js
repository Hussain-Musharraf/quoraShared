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
       navigate('/home');
    }
    const handleBack=()=>{
        navigate('/home');
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
                    <h4 key={key} className="qsn_ans" onClick={()=>handleQuestionClick(key)}>{key}</h4>
                ))}
            </div>
            <div  className="ansBox">
                {getFlag?<p>{getTypeQuestion}</p>:''}
                <textarea id="txtArea" cols="80" rows="10" placeholder="Type your answer here ............." />
                <input type="submit" id="input3" value="Add answer" />
                <br />
                <button id="btn02" onClick={handleBack}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Answer