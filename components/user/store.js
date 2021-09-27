const Model = require('./model');

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

function listUsers() {
  return Model.find();
}

async function getUserByID(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { _id: filterUser };
  }
  const user = await Model.find(filter);
  return user;
}

async function updateUser(id, user) {
  const findUser = await Model.findOne({
    _id: id
  });

  findUser.userID = user.userID;
  findUser.name = user.name;
  findUser.biciID = user.biciID;

  const newStatus = await findUser.save();
  return newStatus;
}

function deletUserByID(id) {
  return Model.deleteOne({ _id: id })
}

module.exports = {
  add: addUser,
  update: updateUser,
  list: listUsers,
  getByID: getUserByID,
  deleteUser: deletUserByID,
}