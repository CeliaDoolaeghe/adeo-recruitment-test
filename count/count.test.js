const { countAnimalsInPerson, countPeopleInCountry, count } = require('./count');

describe('count', () => {
  describe('countAnimalsInPerson', () => {
    it('should count the number of animals in a person', () => {
      const person = {
        name: 'person-1',
        animals: [
          { name: 'animal-1-1' },
          { name: 'animal-1-2' }
        ]
      };

      const expected = {
        name: 'person-1 [2]',
        animals: [
          { name: 'animal-1-1' },
          { name: 'animal-1-2' }
        ]
      };

      expect(countAnimalsInPerson(person)).toEqual(expected);
    });
  });

  describe('countPeopleInCountry', () => {
    it('should count the number of animals in a person and the number of people in a country', () => {
      const country = {
        name: 'country-1',
        people: [
          {
            name: 'person-1',
            animals: [
              { name: 'animal-1-1' },
              { name: 'animal-1-2' }
            ]
          }, {
            name: 'person-2',
            animals: [
              { name: 'animal-1-1' },
            ]
          }, {
            name: 'person-3',
            animals: [
              { name: 'animal-3-1' },
              { name: 'animal-3-2' }
            ]
          }
        ]
      };

      const expected = {
        name: 'country-1 [3]',
        people: [
          {
            name: 'person-1 [2]',
            animals: [
              { name: 'animal-1-1' },
              { name: 'animal-1-2' }
            ]
          }, {
            name: 'person-2 [1]',
            animals: [
              { name: 'animal-1-1' },
            ]
          }, {
            name: 'person-3 [2]',
            animals: [
              { name: 'animal-3-1' },
              { name: 'animal-3-2' }
            ]
          }
        ]
      };

      expect(countPeopleInCountry(country)).toEqual(expected);
    });
  });

  describe('count', () => {
    it('should count the number of animals in a person and the number of people in all countries', () => {
      const countries = [
        {
          name: 'country-1',
          people: [
            {
              name: 'person-1-1',
              animals: [
                { name: 'animal-1-1-1' },
                { name: 'animal-1-1-2' },
                { name: 'animal-1-1-3' },
              ]
            }, {
              name: 'person-1-2',
              animals: [
                { name: 'animal-1-2-1' },
                { name: 'animal-1-2-2' },
                { name: 'animal-1-2-3' },
              ]
            }
          ]
        }, {
          name: 'country-2',
          people: [
            {
              name: 'person-2-1',
              animals: [
                { name: 'animal-2-1-1' },
                { name: 'animal-2-1-2' }
              ]
            }
          ]
        }, {
          name: 'country-3',
          people: [
            {
              name: 'person-3-1',
              animals: [
                { name: 'animal-3-1-1' },
              ]
            }, {
              name: 'person-3-2',
              animals: [
                { name: 'animal-3-2-1' },
                { name: 'animal-3-2-2' },
              ]
            }
          ]
        }
      ];

      const expected = [
        {
          name: 'country-1 [2]',
          people: [
            {
              name: 'person-1-1 [3]',
              animals: [
                { name: 'animal-1-1-1' },
                { name: 'animal-1-1-2' },
                { name: 'animal-1-1-3' },
              ]
            }, {
              name: 'person-1-2 [3]',
              animals: [
                { name: 'animal-1-2-1' },
                { name: 'animal-1-2-2' },
                { name: 'animal-1-2-3' },
              ]
            }
          ]
        }, {
          name: 'country-2 [1]',
          people: [
            {
              name: 'person-2-1 [2]',
              animals: [
                { name: 'animal-2-1-1' },
                { name: 'animal-2-1-2' }
              ]
            }
          ]
        }, {
          name: 'country-3 [2]',
          people: [
            {
              name: 'person-3-1 [1]',
              animals: [
                { name: 'animal-3-1-1' },
              ]
            }, {
              name: 'person-3-2 [2]',
              animals: [
                { name: 'animal-3-2-1' },
                { name: 'animal-3-2-2' },
              ]
            }
          ]
        }
      ];

      expect(count(countries)).toEqual(expected);
    });
  });
});
