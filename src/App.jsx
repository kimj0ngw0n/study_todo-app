import { useMemo } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'
import useLocalStorage from './hooks/useLocalStorage'
import useFilter from './hooks/useFilter'
import './App.css'

function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const { filter, setCategoryFilter, setShowDone } = useFilter()

  // 원본 todos를 변경하지 않고 파생 계산만 수행
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const categoryMatch =
        filter.category === '전체' || todo.category === filter.category
      const doneMatch =
        filter.showDone === 'all' ||
        (filter.showDone === 'active' && !todo.done) ||
        (filter.showDone === 'done' && todo.done)
      return categoryMatch && doneMatch
    })
  }, [todos, filter])

  function addTodo(text, dueDate, category) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
      dueDate: dueDate ?? null,
      category: category ?? '없음',
      createdAt: Date.now(),
    }
    setTodos([...todos, newTodo])
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app">
      <h1 className="app-title">할일 앱</h1>
      <TodoInput onAdd={addTodo} />
      <FilterBar
        filter={filter}
        onCategoryChange={setCategoryFilter}
        onShowDoneChange={setShowDone}
      />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
