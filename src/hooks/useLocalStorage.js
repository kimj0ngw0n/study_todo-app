import { useState } from 'react'

function migrate(items) {
  const now = Date.now()
  return items.map((item) => ({
    dueDate: null,
    category: '없음',
    createdAt: now,
    ...item,
  }))
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        const parsed = JSON.parse(item)
        return migrate(parsed)
      }
      return initialValue
    } catch {
      return initialValue
    }
  })

  function setValue(value) {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
