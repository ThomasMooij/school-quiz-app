import React, {useState} from 'react';
import { questions } from './Questions';
import { quizContext } from './Context';
import {useContext} from 'react';

const Quiz = () => {

const [currentQuestion, setCurrentQuestion] = useState(0);
const [keuze, setKeuze] = useState("");
const {score, setScore , setGameState }= useContext(quizContext);

const nextQuestion = () =>{


    if(questions[currentQuestion].antwoord === keuze &&  currentQuestion === questions.length -1)
    {
        
       setCurrentQuestion(currentQuestion + 1);
        setScore(score + 1);
        setGameState("punten");
        
    }else if(questions[currentQuestion].antwoord === keuze)
    {
        
     setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);

    } else if ( currentQuestion === questions.length -1)
    {
        
        setCurrentQuestion(currentQuestion + 1);
        setGameState("punten"); 
    }

}

  return (
    <div className='quiz'>

    <div className='quizMain'>
        <p>Vraag {questions[currentQuestion].id}/ 5</p>
        <h1>{questions[currentQuestion].question}</h1>
    </div>

    <div className='options'> 
        <button onClick={() => {
            nextQuestion();
            setKeuze('1');
            {/**/}
        }}>{questions[currentQuestion].option1}</button>

        <button onClick={() =>{ 
            nextQuestion();
            setKeuze('2');
            {/*;*/}
        }}>{questions[currentQuestion].option2}</button>

        <button onClick={() =>{ 
            setKeuze('3');
            nextQuestion();
            {/**/}
        }}>{questions[currentQuestion].option3}</button>

        <button onClick={() =>{
            nextQuestion();
            setKeuze('4');
            {/**/}
        }}>{questions[currentQuestion].option4}</button>
    </div>
    
    {/*<button onClick={nextQuestion}>Volgende Vraag</button>*/}
    
    {/*{alert(questions[currentQuestion].antwoord )}*/}
    </div>
    
  )
}

export default Quiz