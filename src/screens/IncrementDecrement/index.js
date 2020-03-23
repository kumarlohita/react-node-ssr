import React, { Fragment, useState } from 'react'

const IncrementDecrement = props => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </Fragment>
  )
}

export default IncrementDecrement
