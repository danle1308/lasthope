const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Use this option only during development
        },
    },
});

module.exports = sequelize;


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//     host: process.env.DB_HOST,
//     dialect: 'postgres'
// });

// module.exports = sequelize;

// // const { Sequelize } = require('sequelize');
// // const { error } = require('console');
// // module.exports = new Sequelize('codegig', 'postgres', '123456', {
// //     host: 'localhost',
// //     dialect: 'postgres'
// //   });