
function Country({dataCountry}) {
  return (
    <>
    <article className="country">
        <p>{dataCountry.flag}</p>
        <h5>{dataCountry.name.official}</h5>
        <h6>{dataCountry.capital}</h6>
        <h6>{dataCountry.continents}</h6>
    </article>
    </>
  )
}

export default Country