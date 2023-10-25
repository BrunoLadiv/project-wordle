import React from 'react'
import { checkGuess } from '../../game-helpers'

function Guess({ guessObj, answer }) {
  let cssClassArray
  if (guessObj) {
    cssClassArray = checkGuess(guessObj.guess, answer)
  }

  return (
    <p
      key={guessObj && guessObj.id}
      className="guess"
    >
      <span className={`cell ${cssClassArray && cssClassArray[0].status}`}>
        {guessObj && guessObj.guess[0]}
      </span>
      <span className={`cell ${cssClassArray && cssClassArray[1].status}`}>
        {guessObj && guessObj.guess[1]}
      </span>
      <span className={`cell ${cssClassArray && cssClassArray[2].status}`}>
        {guessObj && guessObj.guess[2]}
      </span>
      <span className={`cell ${cssClassArray && cssClassArray[3].status}`}>
        {guessObj && guessObj.guess[3]}
      </span>
      <span className={`cell ${cssClassArray && cssClassArray[4].status}`}>
        {guessObj && guessObj.guess[4]}
      </span>
    </p>
  )
}



export default Guess
