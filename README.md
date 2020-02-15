# Node application

CLI application to filter and count children in a data set.

The data set contains countries with people with animals. For example:

```js
[
  {
    "name": "Uzuzozne",
    "people": [
      {
        "name": "Lillie Abbott",
        "animals": [
          {
            "name": "John Dory"
          }
        ]
      }
    ]
  },
  {
    "name": "Satanwi",
    "people": [
      {
        "name": "Anthony Bruno",
        "animals": [
          {
            "name": "Oryx"
          }
        ]
      }
    ]
  }
]
```

## Usage

Download the application. In the root folder, in a terminal:

* `$ npm install`

* `$ jest` to launch all unit tests

## Filter

You can filter the data to keep only countries with people with animals whose name contains a certain substring.

For example, the following command line will keep only countries with people with animals with "ry" in their names:

`$ node app.js --filter=ry`

## Count

You can count all animals for each person and all people for each country. The number will be displayed in the owner's name.

Use this command line:

`$ node app.js --count`
