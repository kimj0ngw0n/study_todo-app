import TodoCheckbox from './TodoCheckbox'
import TodoContent from './TodoContent'
import TodoActions from './TodoActions'

function TodoItem({ todo, onToggle, onDelete }) {
  const isOverdue =
    todo.dueDate &&
    !todo.done &&
    new Date(todo.dueDate) < new Date(new Date().toDateString())

  return (
    <li className={`todo-item${isOverdue ? ' overdue' : ''}`}>
      <TodoCheckbox done={todo.done} onToggle={() => onToggle(todo.id)} />
      <TodoContent
        text={todo.text}
        done={todo.done}
        category={todo.category}
        dueDate={todo.dueDate}
        isOverdue={isOverdue}
      />
      <TodoActions onDelete={() => onDelete(todo.id)} />
    </li>
  )
}

export default TodoItem
