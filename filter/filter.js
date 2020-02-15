const filterAnimals = (animals, matcher) =>
  animals.filter(animal => animal.name.includes(matcher));

const filterPeople = (people, matcher) =>
  people.reduce((matchingPeople, currentPerson) => {
    const matchingAnimals = filterAnimals(currentPerson.animals, matcher);
    if (matchingAnimals.length > 0) {
      return [
        ...matchingPeople,
        {
          name: currentPerson.name,
          animals: matchingAnimals,
        }
      ];
    } else {
      return matchingPeople;
    }
  }, []);

const filterCountries = (countries, matcher) =>
  countries.reduce((matchingCountries, currentCountry) => {
    const matchingPeople = filterPeople(currentCountry.people, matcher);
    if (matchingPeople.length > 0) {
      return [
        ...matchingCountries,
        {
          name: currentCountry.name,
          people: matchingPeople
        }
      ]
    } else {
      return matchingCountries;
    }
  }, []);

module.exports = {
  filterCountries,
  filterAnimals,
  filterPeople,
};
