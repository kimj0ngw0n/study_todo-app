import { useState } from 'react'

// showDone: 'all' | 'active' | 'done'
const INITIAL_FILTER = {
  category: '전체',
  showDone: 'all',
}

function useFilter() {
  const [filter, setFilter] = useState(INITIAL_FILTER)

  function setCategoryFilter(category) {
    setFilter((prev) => ({ ...prev, category }))
  }

  function setShowDone(showDone) {
    setFilter((prev) => ({ ...prev, showDone }))
  }

  function resetFilter() {
    setFilter(INITIAL_FILTER)
  }

  return { filter, setCategoryFilter, setShowDone, resetFilter }
}

export default useFilter
