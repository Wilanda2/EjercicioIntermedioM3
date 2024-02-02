// Fichero src/components/App.jsxx
import '../styles/App.scss';
import countries from '../services/data.json';
import AddCountry from './AddCountry';
import Filters from './Filters';
import Header from './Header';
import ListCountries from './ListCountries';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");

  const changeSearch = (value) => {
    setSearch(value)
  }

  const [select, setSelect] = useState("");

  const changeSelect = (value) => {
    setSelect(value)
  }


  const dataFilter = countries.filter((country) => country.name.official.toLowerCase().includes(search.toLowerCase()))

  const dataSelect = countries.filter((country) => country.continents.includes(search))

  return (
    <>
    <Header/>
    <div>
      <Filters handleFilter={changeSearch} handleSelect={changeSelect}/>
    </div>
    <div>
      <AddCountry/>
    </div>
    <div>
      <ListCountries data={dataFilter} select={dataSelect}/>
    </div>
      
  
    </>

      
  
  )
}

export default App;