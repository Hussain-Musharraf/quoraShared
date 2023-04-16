//import quoraLogo from "Quora-logo.png"
import React from 'react'
import logo from "../../assets/image/Quora-logo.png"
import { useNavigate } from "react-router-dom"
import "./home.css"
import { useState } from "react";
import { QuestionContext } from "../context/QuestionContext";

const Home = () => {

    let value = React.useContext(QuestionContext);
    
    let qsnArr=Object.entries(value.getquestion);

    let qsnAnsArr= Object.entries(value.getQuestionAns);

    const navigate = useNavigate();

    const handleQuestion=()=>{
        navigate('/question')
    }
    const handleAnswer=()=>{
        navigate('/answer')
    }
    const handleLogin=()=>{
        navigate('/login')
    }
  return (
    <div>
        <nav className="heading">
            <div>
                <img src={logo} alt="logo" width="130"/>
            </div>
            <form>
                <input placeholder="search for question......" />
            </form>
            <div className="right">
                <div><button onClick={handleQuestion}>Add Question</button></div>
                <div><button onClick={handleAnswer}>Answer Question</button></div>
                <div><button onClick={handleLogin}>Login</button></div>            
            </div>
        </nav>
        <div className="question-div">
            <div className="que-left">
                <h3>Questions and Answers :</h3>
                {qsnAnsArr.map( ([key,value])=>(
                        <React.Fragment key={key}>
                            <h3>{key}</h3>
                            <div className='ans-div1'>   
                                <h3>Ans:</h3>
                                <h5 style={{marginLeft:10}}>{value}</h5>
                            </div>
                        </React.Fragment>
                    )
                )}
            </div>
            <div className="que-right">
                <h1>Questions:</h1>
                {qsnArr.map( ([key])=>(
                    <ul>
                        <li key={key}>{key}</li>
                    </ul>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Home