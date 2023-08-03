export const getCountryAndCapital = async (country) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await response.json();
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

