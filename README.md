# Workshop-20-03-2020
Workshop Graphql with apollo server Side
Author : [Alexis Valenciano](https://github.com/allexxis/)
## Packages
* [Express.js](https://expressjs.com/en/4x/api) - Web aplication framework
* [Loadash.js](https://lodash.com/docs) - Javascript library
* [BodyParser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware.Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [Sequelize](https://sequelize.org/v5/) - ORM
* [Mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance. 
* [Graphql](https://graphql.org/learn/) -  Query language for APIs
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Tokenization library
* [Apollo-Server](https://sequelize.org/v5/) - ORM
* [Apollo-Server-Express](https://sequelize.org/v5/) - ORM
* [Node-Cache](https://www.npmjs.com/package/node-cache) - Internal caching for nodejs
* [Cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.


## Configuration
Run the command inside the root folder of the project
```bash
$ npm init
```
## Include all
```bash
$ npm i express graphql cors jsonwebtoken sequelize body-parser apollo-server-express apollo-server node-cache lodash mysql2
```

## Run commands

```bash
$ DB_DATABASE=['database'] DB_USERNAME=['root'] DB_PASSWORD=['yourpassword']  DB_HOST=['localhost'] DB_DIALECT=['mysql'] DB_PORT=['3306'] npm start
```

## Tasks
#### First sprint
* [x] Run configuration  
* [x] Install packages
* [x] Configure database run script
* [x] Run test to test database  
* [x] Analyze project structure  
* [x] Express server configuration
* [x] Apollo server configuration
* [x] Create User schema
* [x] Create User resolver
* [ ] Create login mutation
* [ ] Create register resolver
* [ ] Create register mutation
* [ ] Create register resolver
* [ ] Create Post resolver
* [ ] Create Post Schema
* [ ] Create posts query
  

#### Second sprint
* [ ] Add users to cache
* [ ] Block content per user permissions
* [ ] Create admin only mutations
* [ ] Create Test only resolvers
* [ ] Configure real production server
* [ ] Install nginx,pm2,letsencrypt,node-12x
    