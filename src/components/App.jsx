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


  const dataFilter = countries.filter((country) => country.name.official.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <Header/>
    <div>
      <Filters handleFilter={changeSearch}/>
    </div>
    <div>
      <AddCountry/>
    </div>
    <div>
      <ListCountries data={dataFilter}/>
    </div>
      
  
    </>

      
  
  )
}

export default App;