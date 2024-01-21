const getNameCountries = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return await response.json();
}


const search = async (countryName) => {
    const countries = await getNameCountries(countryName);
    console.log(countries);
    return countries[0];
}

export { getNameCountries, search }

/*  let hr = time.getHours();
         let mn = time.getMinutes();
         let sc = time.getSeconds();
         let clock = `${hr}:${mn}:${sc}` */