import './App.css';
import React, {useState} from "react";
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Punten from './components/Punten';
import {quizContext} from './components/Context';

function App() {

const [gameState, setGameState] = useState("menu");
const [score, setScore] = useState(0);

  return (
    <div className="App">
   <h1>Quiz App van Thomas</h1>
    <quizContext.Provider value={{ gameState, setGameState, score, setScore }}> 
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "punten" && <Punten />}
    </quizContext.Provider>
  </div>
  );
}

export default App;
