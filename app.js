if (process.argv.length < 3) {
  console.log('Please use command --filter');
  return;
}

const command = process.argv[2];

if (command.startsWith('--filter')) {
  const { filterCountries } = require('./filter/filter');
  const { data } = require('./data');
  const matcher = command.split('=')[1];

  console.log(JSON.stringify(filterCountries(data, matcher), null, 2));
}
