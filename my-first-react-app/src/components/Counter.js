import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="card">
        <div>
          <button 
          type="button" 
          className="send newExp"
          onClick={() => setCount((count) => count + 1)}>
            Increase by 1
          </button>
        </div>
        <div>
          <button 
          type="button" 
          className="send newExp"
          onClick={() => setCount((count) => count - 1)}>
            Reduce by 1
          </button>
        </div>
      </div>
      <p className="sended"> 
        CV was sended {count} times
      </p>
      
    </div>
  )
}