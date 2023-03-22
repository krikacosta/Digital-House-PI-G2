module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define("Estoque", {
        ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        PRODUTO_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Produto",
            key: "id",
            onDelete: "cascade"
        }
        },
        NOME_COR: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        TAMANHO: {
          type: DataTypes.STRING(10),
          allowNull: false
        },
        ESTOQUE_QTD: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
    }, {
        tablename: "ESTOQUE",
        timestamps: false
    });

    Estoque.associate = (model) => {
        Estoque.belongsTo(model.Produto, {
          as: "produto",
          foreignKey: "PRODUTO_ID"
        });
      }

		return Estoque;
}
