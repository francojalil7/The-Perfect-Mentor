const User = require("../models/User");
var cron = require("node-cron");
const Chat = require("../models/Chat");

const me = async (req, res) => {
  let user = await User.findOne({ email: req.params.email });
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
  userList = await User.find({ isAdmin: false });
  res.status(200).send(userList);
};

const mentorUsers = async (req, res) => {
  const mentors = await User.find({ role: "mentor" });
  res.send(mentors);
};

const menteeUsers = async (req, res) => {
  const mentees = await User.find({ role: "mentee" });
  res.send(mentees);
};

const totalUsers = async (req, res) => {
  const users = await User.find();
  const mentees = await User.find({ role: "mentee" });
  const mentors = await User.find({ role: "mentor" });

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

  //Función para contar usuarios nuevos cada mes | Se utilizaría en el caso de que hubieran usuarios nuevos usualmente
  // cron.schedule("* * * */1 * *", () => {
  //   console.log("Cada 3 segundos")
  // }, {
  //     timezone: "America/Lima"
  //   })

  res.send(newUsers);
};

const filteredUser = async (req, res) => {

  const search = { [req.params.filter]: req.params.value };

  try {
    let users;
    if (search.hasOwnProperty("role")) {
      users = await User.find({ role: search.role });
      res.send(users);
    } else if (search.hasOwnProperty("skills")) {
      users = await User.find({ skills: search.skills });
      res.send(users);
    } else if (search.hasOwnProperty("userName")) {
      users = await User.find({ userName: search.userName });
      res.send(users);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(403).send({ error: error.message });
  }
};

// const contacts = async (nombres, contactosChat) => {
//   const promises = nombres.map((id) => User.findOne({ id: id }));
//   const users = await Promise.all(promises);
//   users.forEach((user) => {
//     const contact = { id: user.id, userName: user.userName };
//     contactosChat.push(contact);
//   });
// };

const searchUsers = async (req, res) => {
  try {
    const users = await User.find();

    const filteredUsers = users.filter((user) =>
      user.userName.toUpperCase().includes(req.params.value.toUpperCase())
    );

    const promises = filteredUsers.map((user) =>
      Chat.find({ users: { $all: [req.query.id, user._id] } }).populate(
        "users",
        "userName"
      )
    );

    const chats = await Promise.all(promises);
    res.send(filteredUsers)

  } catch (error) {
    console.log(error);
  }
};

const createRelation = async (req, res) => {
  // Espera recibir el id de ambos users a actualizar
  // Queda pendiente ver cómo manejar varias relations
  try {
    let updateRequesterUser = await User.findOneAndUpdate(
      {
        "_id": req.body.notifier,
      },
      {
        $set: {
          "relations.$[].id": req.body.notified,
          "relations.$[].match": "pending",
          "relations.$[].userName": null,
        },
      }
    );
    let updateRequestedUser = await User.findOneAndUpdate(
      {
        "_id": req.body.notified,
      },
      {
        $set: {
          "relations.$[].id": req.body.notifier,
          "relations.$[].match": "pending",
          "relations.$[].userName": req.body.notifierUserName,
          "notifications.$[].pending": true
        },
      }
    );
    res.send([updateRequesterUser, updateRequestedUser])
  } catch (error) {
    res.send({ error: error.message });
  }
};

const updateRelation = async (req, res) => {
  //Espera recibir el id de los users a actualizar y la respuesta "accepted"/ "rejected"
  //Colocar res.send y code status
  //Ver cómo manejar varias relations
  try {
    let updateRequesterUser = await User.findOneAndUpdate(
      {
        "_id": req.body.user,
      },
      {
        $set: {
          // "relations.$[].id": req.body.otherUserId,
          "relations.$[].match": req.body.selectedOption,
          "notifications.$[].pending": false
        },
      }
    );
    let updateRequestedUser = await User.findOneAndUpdate(
      {
        "_id": req.body.otherUserId,
      },
      {
        $set: {
        //   "relations.$[].id": req.body.user,
          "relations.$[].match": req.body.selectedOption,
        },
      }
    );
    res.status(200).send([updateRequesterUser, updateRequestedUser])
  } catch (error) {
    res.status(400).send({ error: error.message })
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
  searchUsers,
  mentorUsers,
  menteeUsers,
  createRelation,
  updateRelation
};
