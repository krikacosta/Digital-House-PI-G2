module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define("Produto", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    CATEGORIA_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categoria",
        key: "id",
        onDelete: "cascade"
      }
    },
    NOME_PRODUTO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DESCRICAO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PRECO: {
      type: DataTypes.DECIMAL(2),
      allowNull: false
    },
    IMAGEM_URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROMOCAO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESTAQUE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SEM_ESTOQUE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ATIVO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
  }, {
    tablename: "PRODUTOS",
    timestamps: false
  });

  Produto.associate = (models) => {
    Produto.belongsTo(models.Categoria, {
      as: "categoria",
      foreignKey: "CATEGORIA_ID"
    });
  }

  return Produto;
}
