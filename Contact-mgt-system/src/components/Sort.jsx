function Sort({ sortCriteria, handleSortChange }) {
  return (
    <form className="sort">
      <select
        value={sortCriteria}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option>Sort</option>
        <option value="alphabetical">Alphabetically</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </form>
  );
}

export default Sort;
