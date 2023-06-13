const sequelize = require('../config/connection');
const { Suggest } = require('../models');

const suggestSeeds = require('./suggestSeeds.json');

const seedShit = async () => {
    await sequelize.sync({ force: true });

    await Suggest.bulkCreate(suggestSeeds, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedShit();