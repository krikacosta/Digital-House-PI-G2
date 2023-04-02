module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", { 
        ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        TIPO_USUARIO: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        NOME: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        CPF: {
          type: DataTypes.CHAR(11),
          allowNull: false,
          unique: true
        },
        EMAIL: {
          type: DataTypes.STRING(40),
          allowNull: false,
          unique: true
        },
        DATA_NASC: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        FONE: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        SENHA: {
          type: DataTypes.STRING(15),
          allowNull: false
        },
        ATIVO: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
    }, {
        tablename: "USUARIO",
        timestamps: false
    });

		return Usuario;
}
