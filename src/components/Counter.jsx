// src/components/Counter.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)
  const [time6,setTime6]=useState("");
  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => Math.max(0, prev - 1))

  return (
    <div className="counter-container">
      <h2 className="counter-title">Count: {count}</h2>
      <div className="button-group">
        <button
          onClick={increment}
          className="button button-increment"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="button button-decrement"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number
}

export default Counter