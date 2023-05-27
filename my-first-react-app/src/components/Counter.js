import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="card">
        <div>
          <button 
          type="button" 
          className="send"
          onClick={() => setCount((count) => count + 1)}>
            Збільшити на 1
          </button>
        </div>
        <div>
          <button 
          type="button" 
          className="send"
          onClick={() => setCount((count) => count - 1)}>
            Зменшити на 1
          </button>
        </div>
      </div>
      <p class="sended"> 
        CV Sended {count} times
      </p>
      
    </div>
  )
}