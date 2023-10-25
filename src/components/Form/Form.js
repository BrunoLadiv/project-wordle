import React from 'react'

function Form() {
  const [inputValue, setInputValue] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
    setInputValue('')
  }
  return (
    <form
      onSubmit={handleSubmit}
      class="guess-input-wrapper"
    >
      <label for="guess-input">Enter guess:</label>
      <input
        pattern=".{5,}"
        maxlength="5"
        title="Please enter 5 characters"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  )
}

export default Form
