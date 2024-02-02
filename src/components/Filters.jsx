
function Filters({handleFilter, handleSelect}) {
  return (
    <>
    <h4>Filters</h4>
    <form action="">
      <label htmlFor="">By Country
          <input type="text" onChange={(ev) => handleFilter(ev.target.value)}/>
      </label>
      <label htmlFor="">By Continent
          <select onChange={(ev) => handleSelect(ev.target.value)}>
              <option value="">All</option>
              <option value="">Africa</option>
              <option value="">North America</option>
              <option value="">South America</option>
              <option value="">Asia</option>
              <option value="">Europe</option>
              <option value="">Oceania</option>
          </select>
      </label>
    </form>
    </>
  )
}

export default Filters