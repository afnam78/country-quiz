export const getCountryAndCapital = async (country) => {
    let data = null;
    while(data.capital[0] === undefined || data.capital[0] === null){
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        data = await response.json();
    }
    return data;
}

export const getAllCountriesAndCapitals = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital`);
    const data = await response.json();
    return data;
}

export const getAllCapitals = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all?fields=capital`);
    const data = await response.json();
    return data;
}

