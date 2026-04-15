const CATEGORIES = ['전체', '없음', '업무', '개인', '쇼핑', '건강']

const SHOW_DONE_OPTIONS = [
  { value: 'all',    label: '전체' },
  { value: 'active', label: '미완료' },
  { value: 'done',   label: '완료' },
]

function FilterBar({ filter, onCategoryChange, onShowDoneChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">카테고리</span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter.category === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="filter-group">
        <span className="filter-label">상태</span>
        {SHOW_DONE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`filter-btn ${filter.showDone === opt.value ? 'active' : ''}`}
            onClick={() => onShowDoneChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
