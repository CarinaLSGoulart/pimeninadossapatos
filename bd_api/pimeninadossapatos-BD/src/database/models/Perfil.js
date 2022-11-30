const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define(
        "Perfil",
        {
            idPerfil: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.INTEGER,
            dataNascimento: DataTypes.DATE,
            celular: DataTypes.STRING,
            telefoneFixo: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            tableName: 'perfil',
            timestamps: false,
            underscored: true,
        }

    )
    return Perfil;
}