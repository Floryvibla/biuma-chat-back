import dotenv from 'dotenv'
import { Options } from 'sequelize';
dotenv.config()


export = {
    HOST: process.env.DATABASE_HOST as string,
    USER: process.env.DATABASE_USERNAME as string,
    PASSWORD: process.env.DATABASE_PASSWORD as string,
    DB: process.env.DATABASE_NAME as string,
    dialect: process.env.DATABASE_CLIENT as Options["dialect"],
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
}