const filterList = [
  "All",
  "Mine",
  "Development",
  "Design",
  "Marketing",
  "Sales",
];

const Filter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className='filter'>
      <nav>
        <p>Filter by - </p>
        {filterList.map((cat) => (
          <button
            key={cat}
            onClick={(e) => handleClick(cat)}
            className={currentFilter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Filter;
