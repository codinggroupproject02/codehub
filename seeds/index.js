const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');
const seedProLang = require('./ProLang-seeds');
const seedCompetence  = require('./competence-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedProLang();
  console.log('--------------');

  await seedCompetence();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();
