import User from "../models/User.js";

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.send(users);
    return users;
    console.log(users);
  } catch (error) {
    res.send(error);
  }
}

async function addUser(req, res) {
  try {
    const userData = {
        name: req.body.name,
        age: req.body.age
    };
    const user = new User(userData);
    const savedUser = await user.save();
    res.send(userData);
    return savedUser;
  } catch (error) {
    res.send(error);
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params._id;
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      res.send('Usuário não encontrado');
    }
    return result;
  } catch (error) {
    res.send(error);
  }
}

export {getUsers, addUser, deleteUser};
