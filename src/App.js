import './App.css';
import Home from './components/Home';
import {Routes,Route } from 'react-router-dom';
import Question from './components/Question';
import Answer from './components/Answer';
import Login from './components/Login';
import { QuestionProvider } from './components/context/QuestionContext';
function App() {
  return (
    <div className="App">
    <QuestionProvider>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/answer' element={<Answer/>}/>
      </Routes>
    </QuestionProvider>
    </div>
  );
}

export default App;
