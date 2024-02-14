const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://user:password@host:port/database", {
	dialect: "postgres"
});

module.exports = sequelize;