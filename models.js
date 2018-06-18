const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = sequelize.define('gardners', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

const Plot = sequelize.define('plots', {
  size: {
    type: Sequelize.INTEGER,
  },
  shaded: {
    type: Sequelize.BOOLEAN,
  },
});

const Vegetable = sequelize.define('vegetables', {
  name: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  plantedOn: {
    type: Sequelize.DATE,
  },
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, { through: 'crop' });
Plot.belongsToMany(Vegetable, { through: 'crop' });

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });

module.exports = sequelize;
