const { filterAnimals, filterPeople, filterCountries } = require('./filter');

describe('filter', () => {
  describe('filterAnimals', () => {
    it('should return an empty array if no animal has "success" in its name', () => {
      const animals = [
        { name: 'animal-failure-1' },
        { name: 'animal-failure-2' }
      ];

      expect(filterAnimals(animals, "success")).toEqual([]);
    });

    it('should only keep animals with "success" in their name', () => {
      const animals = [
        { name: 'animal-success-1' },
        { name: 'animal-failure-2' }
      ];

      const expected = [
        { name: 'animal-success-1' }
      ];

      expect(filterAnimals(animals, "success")).toEqual(expected);
    });
  });

  describe('filterPeople', () => {
    it('should return an empty array if no person possesses an animal with "success" in its name', () => {
      const people = [
        {
          name: 'person-1',
          animals: [
            { name: 'animal-failure-1-1' },
            { name: 'animal-failure-1-2' }
          ]
        }, {
          name: 'person-2',
          animals: [
            { name: 'animal-failure-2-1' },
            { name: 'animal-failure-2-2' }
          ]
        }
      ];

      expect(filterPeople(people, "success")).toEqual([]);
    });

    it('should only keep people with animals with "success" in its name', () => {
      const people = [
        {
          name: 'person-1',
          animals: [
            { name: 'animal-failure-1-1' },
            { name: 'animal-success-1-2' },
            { name: 'animal-failure-1-3' }
          ]
        }, {
          name: 'person-2',
          animals: [
            { name: 'animal-failure-2-1' },
            { name: 'animal-failure-2-2' }
          ]
        }
      ];

      const expected = [
        {
          name: 'person-1',
          animals: [
            { name: 'animal-success-1-2' }
          ]
        }
      ];

      expect(filterPeople(people, "success")).toEqual(expected);
    });
  });

  describe('filterCountries', () => {
    it('should return an empty array if no country contains people with animals with "success" in their name', () => {
      const countries = [
        {
          name: 'country-1',
          people: [
            {
              name: 'person-1-1',
              animals: [
                { name: 'animal-failure-1-1-1' },
                { name: 'animal-failure-1-1-2' }
              ]
            }, {
              name: 'person-1-2',
              animals: [
                { name: 'animal-failure-1-2-1' },
                { name: 'animal-failure-1-2-2' }
              ]
            }
          ]
        }, {
          name: 'country-2',
          people: [
            {
              name: 'person-2-1',
              animals: [
                { name: 'animal-failure-2-1-1' },
                { name: 'animal-failure-2-1-2' }
              ]
            }, {
              name: 'person-2-2',
              animals: [
                { name: 'animal-failure-2-2-1' },
                { name: 'animal-failure-2-2-2' }
              ]
            }
          ]
        }
      ];

      expect(filterCountries(countries, "success")).toEqual([]);
    });

    it('should only keep countries with people with animals with "success" in their name', () => {
      const countries = [
        {
          name: 'country-1',
          people: [
            {
              name: 'person-1-1',
              animals: [
                { name: 'animal-failure-1-1-1' },
                { name: 'animal-failure-1-1-2' },
                { name: 'animal-success-1-1-3' },
              ]
            }, {
              name: 'person-1-2',
              animals: [
                { name: 'animal-failure-1-2-1' },
                { name: 'animal-success-1-2-2' },
                { name: 'animal-failure-1-2-3' },
              ]
            }
          ]
        }, {
          name: 'country-2',
          people: [
            {
              name: 'person-2-1',
              animals: [
                { name: 'animal-failure-2-1-1' },
                { name: 'animal-failure-2-1-2' }
              ]
            }, {
              name: 'person-2-2',
              animals: [
                { name: 'animal-failure-2-2-1' },
                { name: 'animal-failure-2-2-2' }
              ]
            }
          ]
        }, {
          name: 'country-3',
          people: [
            {
              name: 'person-3-1',
              animals: [
                { name: 'animal-failure-3-1-1' },
                { name: 'animal-failure-3-1-2' }
              ]
            }, {
              name: 'person-3-2',
              animals: [
                { name: 'animal-failure-3-2-1' },
                { name: 'animal-success-3-2-2' }
              ]
            }
          ]
        }
      ];

      const expected = [
        {
          name: 'country-1',
          people: [
            {
              name: 'person-1-1',
              animals: [
                { name: 'animal-success-1-1-3' },
              ]
            }, {
              name: 'person-1-2',
              animals: [
                { name: 'animal-success-1-2-2' },
              ]
            }
          ]
        }, {
          name: 'country-3',
          people: [
            {
              name: 'person-3-2',
              animals: [
                { name: 'animal-success-3-2-2' }
              ]
            }
          ]
        }
      ];

      expect(filterCountries(countries, "success")).toEqual(expected);
    });
  });
});
