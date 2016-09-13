# Project Name

> Pithy project description

## Team

  - __Product Owner__: teamMember
  - __Scrum Master__: teamMember
  - __Development Team Members__: teamMember, teamMember

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions
in one terminal window run
mysql.server start
after this open another terminal window
and start your express server
then go back to the mysql.server termianl and run
mysql -u root < schema.sql
that adds the new database 'rezzy'
in another termianl window 3 run
mysql -u root
SHOW DATABASES;


## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

about.html
Pictures and information about the creators of the website

home.html – homectrl.js
Main page where the aggregated site are shown

links.html – linksctrl.js
This is where signing in users can add resources to the database

mainCtrl.js
Controller for user sign in and sign out

profile.html – profileCtrl.js
modify profile information and add a user profile picture

routes.js
front-end page routing

services.js
Communication between back-end and front-end

index.html
layout of the header and the footer for every page

links-helpers.js
database queries for links

user-helpers.js
database queries for users

connection.js
server connection to database

hash-helpers.js
hashes and salts passwords that are to be stored in the database

links.js
routing helpers for links

photos.js
routing helpers for profile

user.js
routing helpers for users


error404.html
error handling page

login.html
login page

signup.html
sign up page

server.js
main server for all the routing and hosting

schema.sql
mysql schema design for users, user_voted, resources, languages, resource_type, and sub_topic.
Also test data is inserted to prepopulate the pages with languages, resource_type, and sub_topic.


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
