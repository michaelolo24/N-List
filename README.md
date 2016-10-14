![alt text](https://github.com/michaelolo24/N-List/blob/master/client/style/images/n-list-logo_125.png "N-List")

# N-List
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

- server.js : Main server for all the routing and hosting

- about.html : Information regarding project developers

- home.html : homectrl.js Main content page for aggregated resources

- links.html : linksctrl.js Route for authenticated users to add resources

- mainCtrl.js : Controller for user sign in and sign out

- profile.html : profileCtrl.js Modify profile information and add a user profile picture

- routes.js : Front-end page routing

- services.js : Communication between back-end and front-end

- index.html : Layout of the header and the footer for every page

- links-helpers.js : database queries for links

- user-helpers.js : database queries for users

- connection.js : server connection to database

- hash-helpers.js hashes and salts passwords that are to be stored in the database


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
