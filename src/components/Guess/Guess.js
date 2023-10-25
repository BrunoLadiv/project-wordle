import React from 'react'

function Guess({ guessObj }) {

  console.log(guessObj);
  // const guessLetters = [...guess.guess]
  return (
    <p key={guessObj && guessObj.id} class="guess">
      <span class="cell">{guessObj && guessObj.guess[0]}</span>
      <span class="cell">{guessObj && guessObj.guess[1]}</span>
      <span class="cell">{guessObj && guessObj.guess[2]}</span>
      <span class="cell">{guessObj && guessObj.guess[3]}</span>
      <span class="cell">{guessObj && guessObj.guess[4]}</span>
    </p>
  )
}

export default Guess
