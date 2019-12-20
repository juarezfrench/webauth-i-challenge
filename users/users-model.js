const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(username) {
  return db("users")
    .select("id", "username", "password") // make sure to return the password
    .where(username);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function update(username, changes) {
  return db('users')
    .where({username})
    .update(changes)


}
