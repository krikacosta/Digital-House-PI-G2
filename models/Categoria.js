module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },

          CATEGORIA_NOME: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
    }, {
        tablename: "CATEGORIA",
        freezeTableName: true,
        timestamps: false
    });

		return Categoria;
}
