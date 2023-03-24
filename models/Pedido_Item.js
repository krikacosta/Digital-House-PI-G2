module.exports = (sequelize, DataTypes) => {
    const Pedido_Item = sequelize.define("Pedido_Item", {
        ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        PEDIDO_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Pedido",
            key: "id",
            onDelete: "cascade"
        }
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
          allowNull: false,
        },
        TAMANHO: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        QUANTIDADE: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        PRECO: {
          type: DataTypes.DECIMAL(2),
          allowNull: false
        },
    }, {
        tablename: "PEDIDOS_ITENS",
        timestamps: false
    });

    Pedido_Item.associate = (model) => {
        Pedido_Item.belongsTo(model.Pedido, {
            as: "pedido",
            foreignKey: "PEDIDO_ID"
        });
        };
    Pedido_Item.associate = (model) => {
        Pedido_Item.belongsTo(model.Produto, {
            as: "produto",
            foreignKey: "PRODUTO_ID"
        });
      }

		return Pedido_Item;
}
