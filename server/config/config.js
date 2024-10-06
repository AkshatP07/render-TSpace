const { Sequelize } = require('sequelize');
import pg from 'pg';
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // To disable SQL logging, helps during development
    dialectModule: pg
});

module.exports = sequelize;
