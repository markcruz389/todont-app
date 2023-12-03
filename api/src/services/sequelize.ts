import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todont_db", "root", "password", {
    dialect: "sqlite",
    storage: "./db/todolistdb.sqlite",
});

export default sequelize;
