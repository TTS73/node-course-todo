const {User} = require('./../models/user');

var authenticate = (req, res ,next) => {
  let token = req.header('x-auth');
  // console.log('Authenticate function');

  User.findByToken(token).then((user) => {
    if(!user) {
      return Promise.reject();
    }
    // console.log(user);
    req.user = user;
    req.token = token;
    next();
  }).catch(e => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
