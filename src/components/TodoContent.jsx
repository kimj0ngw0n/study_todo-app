import { CATEGORY_COLORS } from '../constants'

function TodoContent({ text, done, category, dueDate, isOverdue }) {
  const showCategory = category && category !== '없음'
  const categoryColor = CATEGORY_COLORS[category] ?? '#aaa'

  return (
    <div className="todo-content">
      <span className={`todo-text${done ? ' done' : ''}`}>{text}</span>
      <div className="todo-meta">
        {showCategory && (
          <span
            className="category-label"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
        )}
        {dueDate && (
          <span className={`due-date${isOverdue ? ' overdue-date' : ''}`}>
            📅 {dueDate}
          </span>
        )}
      </div>
    </div>
  )
}

export default TodoContent
