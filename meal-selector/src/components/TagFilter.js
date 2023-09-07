import React from 'react';

function TagFilter({ tags, filteredTag, filterMeals }) {
  const handleTagClick = (selectedTag) => {
    filterMeals(selectedTag);
  };

  return (
    <div className="tag-filter">
      <button
        className={`tag-button ${filteredTag === 'all' ? 'active' : ''}`}
        onClick={() => handleTagClick('all')}
      >
        All
      </button>
      
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`tag-button ${filteredTag === tag.id ? 'active' : ''}`}
          onClick={() => handleTagClick(tag.id)}
        >
          {tag.label}
        </button>
        
      ))}
    </div>
  );
}

export default TagFilter;
