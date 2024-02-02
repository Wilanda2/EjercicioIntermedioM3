import Country from "./Country";

function ListCountries({data, select}) {

    const mapData = () => {
        return data.map((country, i) => <li key={i}> <Country dataCountry = {country}/> </li>)
    }

  return (
    <ul className="listCountries">
        {mapData()}
    </ul>
  )
}

export default ListCountries