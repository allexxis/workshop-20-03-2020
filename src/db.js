
const Sequelize = require('sequelize');
const UserModel = require('./types/user/user.model');
const {    
    USERNAME,
    PASSWORD,
    DATABASE,
    HOST,
    DIALECT,
    PORT } = require('./config/db');
const sequelize = new Sequelize(
    DATABASE,
    USERNAME,
    PASSWORD,
    {
        host:HOST,
        dialect: 'mysql',
        port: PORT
    }
);
const User = UserModel(sequelize, Sequelize);
sequelize.authenticate().then(
    () => {
        console.log('Database connection has been established successfully');
    },
    err => {
        console.log('Unable to connect to the database:', err);
    }
);

module.exports={User}