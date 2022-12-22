const User = require("../models/User");
var cron = require("node-cron");
//FIND ALL USERS
//FIND ONE USER
//MENTOR, MENTEE, ADMIN -> ID /email
//ASIGNAR UN MENTEE O MENTOR

const me = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  res.send(user);
};

const updateUser = async (req, res) => {
  let userUpdate = await User.findOneAndUpdate({ _id: req.body._id }, req.body);
  userUpdate.save();
  const user = await User.find({ _id: req.body._id });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const userDelete = await User.findOneAndDelete(req.body._id);
  res.sendStatus(204);
};

const findAllUsers = async (req, res) => {
  let userList = [];
  userList = await User.find();
  res.status(200).send(userList);
};

const totalUsers = async (req, res) => {
  const users = await User.find();
  const mentees = await User.find({ isMentee: true });
  const mentors = await User.find({ isMentor: true });

  res.send({
    users: users.length,
    mentees: mentees.length,
    mentors: mentors.length,
  });
};

const singPerMounth = async (req, res) => {
  const users = await User.find();
  const usersPerMonth = [];
  const meses = {
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    octuber: 0,
    november: 0,
    december: 0,
  };

  users.map(({ created }) => {
    if (JSON.stringify(created).substring(6, 8) === "01") meses.january += 1;
    if (JSON.stringify(created).substring(6, 8) === "02") meses.february += 1;
    if (JSON.stringify(created).substring(6, 8) === "03") meses.march += 1;
    if (JSON.stringify(created).substring(6, 8) === "04") meses.april += 1;
    if (JSON.stringify(created).substring(6, 8) === "05") meses.may += 1;
    if (JSON.stringify(created).substring(6, 8) === "06") meses.june += 1;
    if (JSON.stringify(created).substring(6, 8) === "07") meses.july += 1;
    if (JSON.stringify(created).substring(6, 8) === "08") meses.august += 1;
    if (JSON.stringify(created).substring(6, 8) === "09") meses.september += 1;
    if (JSON.stringify(created).substring(6, 8) === "10") meses.octuber += 1;
    if (JSON.stringify(created).substring(6, 8) === "11") meses.november += 1;
    if (JSON.stringify(created).substring(6, 8) === "12") meses.december += 1;
  });

  for (const property in meses) {
    usersPerMonth.push(meses[property]);
  }

  res.send(usersPerMonth);
};

const newUsers = async (req, res) => {
  const newUsers = {
    users: 17,
    mentees: 7,
    mentors: 10,
  };

  //Función para contar usuarios nuevos cada mes
  // cron.schedule("* * * */1 * *", () => {
  //   console.log("Cada 3 segundos")
  // }, {
  //     timezone: "America/Lima"
  //   })

  res.send(newUsers);
};

const filteredUser = async ({ body }, res) => {
  try {
    let users;
    if (body.hasOwnProperty("role")) {
      users = await User.find({ role: body.role });
      res.send(users);
    } else if (body.hasOwnProperty("skills")) {
      users = await User.find({ skills: body.skills });
      res.send(users);
    } else if (body.hasOwnProperty("userName")) {
      users = await User.find({ userName: body.userName });
      res.send(users);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(403).send({ error: error.message });
  }
};

module.exports = {
  me,
  updateUser,
  deleteUser,
  findAllUsers,
  totalUsers,
  singPerMounth,
  newUsers,
  filteredUser,
};
