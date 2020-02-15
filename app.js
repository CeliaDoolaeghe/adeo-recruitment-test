if (process.argv.length < 3) {
  console.log('Please use command --filter or --count ');
  return;
}

const command = process.argv[2];

if (command.startsWith('--filter')) {
  const { filterCountries } = require('./filter/filter');
  const { data } = require('./data');
  const matcher = command.split('=')[1];

  console.log(JSON.stringify(filterCountries(data, matcher), null, 2));

} else if (command.startsWith('--count')) {
  const { count } = require('./count/count');
  const { data } = require('./data');

  console.log(JSON.stringify(count(data), null, 2));

} else {
  console.log('Unknown command, please use command --filter or --count')
}
