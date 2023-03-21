module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", { 
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
        ENDERECO_ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Endereco",
            key: "id",
            onDelete: "cascade"
        }
        },
        CARRINHO: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        COMPRA: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
    }, {
        tablename: "PEDIDOS",
        timestamps: false
    });

    Pedido.associate = (model) => {
        Pedido.belongsTo(model.Usuario, {
            as: "usuario",
            foreignKey: "USUARIO_ID"
        });
        };
    Pedido.associate = (model) => {
        Pedido.belongsTo(model.Endereco, {
            as: "endereco",
            foreignKey: "ENDERECO_ID"
        });
      }

		return Pedido;
}