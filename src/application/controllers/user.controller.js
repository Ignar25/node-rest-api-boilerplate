const fetch = require('node-fetch');
const moment = require('moment');
const config = require('../../../config/index');

const METHOD = { method: 'get' };
const getUrl = (url, method) => fetch(url, method)
  .then((res) => res.json())
  .catch((err) => {
    console.log(`Error ${err}`);
  });

const userController = {
  getUsers: async (req, res) => {
    // let order = req.query.order;
    const data = await getUrl(config.url, METHOD);
    let user = [];
    const today = moment();

    try {
      for (let index = 0; index < data.users.length; index++) {
        if (data.users[index].is_active) {
          const dataU = data.users[index];
          const dateUser = moment(dataU.birthday);
          const age = today.diff(dateUser, 'years');
          const USER = {
            users: dataU,
            age,
          };
          user = [...user, USER];
        }
      }
      return res.json({
        Users: user,
      });
    } catch (error) {
      return res.status(404).send({
        message: 'No object found',
      });
    }
  },
};

module.exports = userController;
