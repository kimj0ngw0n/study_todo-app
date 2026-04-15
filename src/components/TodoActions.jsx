function TodoActions({ onDelete }) {
  return (
    <div className="todo-actions">
      <button
        className="btn-delete"
        onClick={onDelete}
        aria-label="삭제"
      >
        ✕
      </button>
    </div>
  )
}

export default TodoActions
