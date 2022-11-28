import React, {useState} from 'react';
import { quizContext } from './Context';
import {useContext} from 'react';

const Punten = () => {

  const {score, setScore , setGameState }= useContext(quizContext);

  const menu = () =>{
    setGameState("menu");
    setScore(0);
  }

  return (
    <div>
    <div>{score} van de 5</div>
    <button onClick={menu}>Terug naar menu</button>
    </div>
  )
}

export default Punten