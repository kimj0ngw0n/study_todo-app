import { useState } from 'react'
import { CATEGORIES } from '../constants'

function TodoInput({ onAdd }) {
  const [text, setText] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('없음')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim(), dueDate || null, category)
    setText('')
    setDueDate('')
    setCategory('없음')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="input-text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할일을 입력하세요"
      />
      <input
        className="input-date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        className="input-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button className="btn-add" type="submit">추가</button>
    </form>
  )
}

export default TodoInput
