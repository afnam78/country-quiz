import { getAllCountriesAndCapitals } from "./ApiCountries";

export function getRandomInt() {
    return Math.floor(Math.random() * 250);
}

export async function generateFiveQuizes() {
    let allCountries = await getAllCountriesAndCapitals();
    let countriesGenerated = [];
    for (let index = 0; index < 5; index++) {
        let random = getRandomInt();
        let country = allCountries[random];
        if (countriesGenerated.includes(country)) {
            index--;
        }else{
            countriesGenerated.push(country);
        }
    }

    return countriesGenerated;
}
