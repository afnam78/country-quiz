import { getAllCapitals, getAllCountriesAndCapitals } from "./ApiCountries";

// Función para barajar un array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export async function generateFiveQuizes() {
  let allCountries = await getAllCountriesAndCapitals();
  let allCapitals = await getAllCapitals();

  let shuffledCountries = shuffle(allCountries);
  let countriesGenerated = shuffledCountries.slice(0, 5);

  for (let country of countriesGenerated) {
    country.falseCapitals = [];

    let shuffledCapitals = shuffle(allCapitals);

    for (let capital of shuffledCapitals) {
      if (country.falseCapitals.length >= 3) break;
      if (capital !== country.capital && (capital !== null || capital !== undefined)) {
        country.falseCapitals.push(capital);
      }
    }
  }

  return countriesGenerated;
}
