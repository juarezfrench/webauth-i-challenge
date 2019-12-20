const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');


router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
;

router.get('/:id', (req, res) => {
  Users.findById({id})
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
;

router.put('/:username', restricted, (req, res) => {
  const { username } = req.params.username;
  const changes = req.body;

  Users.find(username)
  .then(user => {
    if (user) {
      Users.update(username,changes)
      .then(updateduser => {
        res.json(updateduser);
      });
    } else {
      res.status(404).json({ message: 'Could not find user with given username' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});
module.exports = router;
