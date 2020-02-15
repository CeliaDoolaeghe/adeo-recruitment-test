const countAnimalsInPerson = person => ({
  name: `${person.name} [${person.animals.length}]`,
  animals: person.animals,
});

const countPeopleInCountry = country => ({
  name: `${country.name} [${country.people.length}]`,
  people: country.people.map(person => countAnimalsInPerson(person)),
});

const count = countries =>
  countries.map(country => countPeopleInCountry(country));

module.exports = {
  countAnimalsInPerson,
  countPeopleInCountry,
  count,
};
