import users from "./users.js";
import * as dao from "../../users/users-dao.js";

// let currentUser = null;

const UsersController = (app) => {
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserByUsername = async (req, res) => {
    // const user = users.find((user) => user.username === req.params.username);
    const user = await dao.findUserByUsername(req.params.username);
    res.json(user);
  };
  const findUserById = async (req, res) => {
    // const user = users.find((user) => user.id === req.params.id);
    const user = await dao.findUserById(req.params.id);
    res.json(user);
  };
  const createUser = async (req, res) => {
    const user = req.body;
    // users.push(user);
    const newUser = await dao.createUser(user);
    res.json(newUser);
  };

  const updateUser = async (req, res) => {
    const user = req.body;
    // const index = users.findIndex((user) => user.id === req.params.id);
    // users[index] = user;
    const status = await dao.updateUser(req.params.id, user);
    res.send(status);
  };
  const deleteUser = async (req, res) => {
    // const index = users.findIndex((user) => user.id === req.params.id);
    // users.splice(index, 1);
    const status = await dao.deleteUser(req.params.id);
    res.send(status);
  };
  const login = async (req, res) => {
    const user = await dao.findUserByCredentials(req.body);
    // users.find((user) => user.username === req.body.username);
    if (user) {
      req.session["currentUser"] = user;
      res.json(user);
    } else {
      res.sendStatus(401);
    }
  };
  const logout = async (req, res) => {
    req.session.destroy();
    // currentUser = null;
    res.sendStatus(200);
  };
  const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(404);
      return;
    }
    res.send(currentUser);
  };
  const register = async (req, res) => {
    const user = req.body;
    // users.push(user);
    const existingUser = await dao.findUserByUsername(user.username);
    if (existingUser) {
      res.sendStatus(409);
      return;
    }
    const newUser = await dao.createUser(user);
    req.session.currentUser = newUser;
    res.json(newUser);
  };

  app.post("/api/users/login", login);
  app.post("/api/users/logout", logout);
  app.get("/api/users/profile", profile);
  app.post("/api/users/register", register);

  app.get("/api/users", findAllUsers);
  app.get("/api/users/username/:username", findUserByUsername);
  // app.get("/api/users/:id", findUserById);
  app.post("/api/users", createUser);
  app.put("/api/users/:id", updateUser);
  app.delete("/api/users/:id", deleteUser);
};

export default UsersController;
