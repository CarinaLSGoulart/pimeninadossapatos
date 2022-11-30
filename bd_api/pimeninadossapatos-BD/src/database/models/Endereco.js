const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        "Endereco",
        {
            idEndereco: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            endereco: DataTypes.STRING,
            cep: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,

        },
        {
            tableName: 'endereco',
            timestamps: false,
            underscored: true,
        }
    )
    return Endereco;
}