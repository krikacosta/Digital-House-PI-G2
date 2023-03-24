module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define("Endereco", { 
        ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        USUARIO_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Usuario",
            key: "id",
            onDelete: "cascade"
        }
        },
        CEP: {
          type: DataTypes.CHAR(8),
          allowNull: false
        },
        LOGRADOURO: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        NUMERO: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        COMPLEMENTO: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        BAIRRO: {
          type: DataTypes.STRING(40),
          allowNull: true
        },
        CIDADE: {
          type: DataTypes.STRING(40),
          allowNull: true
        },
        ESTADO: {
          type: DataTypes.CHAR(2),
          allowNull: true
        },
        ATIVO: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
    }, {
        tablename: "ENDERECOS",
        timestamps: false
    });

    Endereco.associate = (model) => {
        Endereco.belongsTo(model.Usuario, {
          as: "usuario",
          foreignKey: "USUARIO_ID"
        });
      }

		return Endereco;
}