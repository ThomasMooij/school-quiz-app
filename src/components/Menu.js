import React, {useContext} from 'react';
import { quizContext } from './Context';

const Menu = () => {

const {gameState, setGameState} = useContext(quizContext);

  return (
    <button onClick={() => {
        setGameState("quiz")
    }}>Begin met de quiz</button>
  )
}

export default Menu