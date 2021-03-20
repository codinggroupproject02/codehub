const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    first_name: 'alfred',
    last_name: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    knowledgeable_in: 'python'   
  },
  {
    first_name: 'alfred',
    last_name: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
    knowledgeable_in: 'python'
  },
  {
    first_name: 'alfred',
    last_name: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
    knowledgeable_in: 'python'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
