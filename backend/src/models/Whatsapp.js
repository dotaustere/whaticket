const Sequelize = require("sequelize");

class Whatsapp extends Sequelize.Model {
	static init(sequelize) {
		super.init(
			{
				session: { type: Sequelize.TEXT },
				qrcode: { type: Sequelize.TEXT },
				status: { type: Sequelize.STRING },
				battery: { type: Sequelize.STRING },
				plugged: { type: Sequelize.BOOLEAN },
			},
			{
				sequelize,
			}
		);

		return this;
	}
}

module.exports = Whatsapp;
