import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
} from "sequelize";

import sequelize from "../services/sequelize";

class Todont extends Model<
    InferAttributes<Todont>,
    InferCreationAttributes<Todont>
> {
    declare id: CreationOptional<number>;
    declare description: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Todont.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    { sequelize, modelName: "Todont" }
);

export default Todont;
