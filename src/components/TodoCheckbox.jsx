function TodoCheckbox({ done, onToggle }) {
  return (
    <input
      type="checkbox"
      className="todo-checkbox"
      checked={done}
      onChange={onToggle}
      aria-label={done ? '완료됨' : '미완료'}
    />
  )
}

export default TodoCheckbox
