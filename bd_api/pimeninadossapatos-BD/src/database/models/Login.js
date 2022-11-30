const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define(
        "Login",
        {
            idLogin: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            tableName: 'login',
            timestamps: false,
            underscored: true,
        }

    )
    return Login;
    }