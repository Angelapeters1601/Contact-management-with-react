function Search({ search, setSearch, searchContact }) {
  return (
    <form className="add-form search" onSubmit={searchContact}>
      <input
        type="text"
        placeholder="Search for contacts..🔎.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
