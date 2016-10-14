# N-List
> ![alt text](https://github.com/michaelolo24/N-List/blob/master/client/style/images/n-list-logo_125.png "Logo Title Text 1")
> Reddit like resource aggregator for developers

## Team

  - __Product Owner__: Kent Moreland
  - __Scrum Master__: Michael Olorunnisola
  - __Development Team Members__: Neekon Etemad, Harris Lee, Daniel Wirz

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

- Start mysql server with mysql.server start command
- Install database with mysql -u root -p < schema.sql
- npm start to run files

## Requirements

- Node 6.x
- MySQL 5.x


## Development

### Installing Dependencies

From within the root directory:

```sh
 sudo npm install -g mysql
 npm install
```

### Roadmap

- server.js : main server for all the routing and hosting

- about.html : Pictures and information about the creators of the website

- home.html : homectrl.js Main page where the aggregated site are shown

- links.html : linksctrl.js This is where signing in users can add resources to the database

- mainCtrl.js : Controller for user sign in and sign out

- profile.html : profileCtrl.js modify profile information and add a user profile picture

- routes.js : front-end page routing

- services.js : Communication between back-end and front-end

- index.html : layout of the header and the footer for every page

- links-helpers.js : database queries for links

- user-helpers.js : database queries for users

- connection.js : server connection to database

- hash-helpers.js hashes and salts passwords that are to be stored in the database


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
