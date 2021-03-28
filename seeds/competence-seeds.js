const { Competence } = require('../models');

const competencedata = [
  {
    post_id:1,
    ProLang_id:1
  },
  {
    post_id:1,
    ProLang_id:2
  },
  {
    post_id:2,
    ProLang_id: 2
  },
  {
    post_id:3,
    ProLang_id: 1
  },
  {
    post_id:4,
    ProLang_id: 5
  },
  {
    post_id:5,
    ProLang_id: 6
  },
  {
    post_id:7,
    ProLang_id: 6
  },
  {
    post_id:6,
    ProLang_id: 6
  }
];

const seedCompetence = () => Competence.bulkCreate(competencedata);

module.exports = seedCompetence;
