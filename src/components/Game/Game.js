import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import GuessResults from '../GuessResults'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  return (
    <>
      <GuessResults>
        {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
          return <Guess key={i} guessObj={guesses[i]} answer={answer} />
        })}
      </GuessResults>
      <Form
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  )
}

export default Game
