const { default: axios } = require("axios");
const Chat = require("../models/Chat");
const User = require("../models/User");

const newChat = async (req, res) => {
  if (!req.body.to)
    return res.status(404).send({ error: "no se pudo crear chat" });
  const chats = await Chat.find({
    users: { $all: [req.user.id, req.body.to] },
  });
  if (chats.length > 0) {
    return res.status(404).send({ error: "no se pudo crear chat" });
  } else {
    const chat = await new Chat();

    chat.users.push(req.user.id);
    chat.users.push(req.body.to);
    chat.save();

    res.send(chats);
  }
};

// const contacts = async (nombres,contactosChat) => {
  
//   nombres.forEach( (id) => {
//     User.findOne({ id: id }).then((user) => {
//       const contact = { id: user.id, userName: user.userName };
//       contactosChat.push(contact)
//       console.log("🚀 ~ file: chat.js:30 ~ User.findOne ~ contactosChat", contactosChat)
//     });
//   });

// };

const contacts = async (nombres, contactosChat) => {
  const promises = nombres.map((id) => User.findOne({ id: id }));
  const users = await Promise.all(promises);
  users.forEach((user) => {
    const contact = { id: user.id, userName: user.userName };
    contactosChat.push(contact);
  });
};

const getChats = async (req, res) => {
  const chats = await Chat.find({
    users: { $all: [req.user.id, req.body.to] },
  });
  const nombres = [];

  if (chats.length > 0) {
    chats.forEach((chat) => {
      chat.users[0] == req.user.id
        ? nombres.push(chat.users[1])
        : nombres.push(chat.users[0]);
    });
  }
  const contactosChat = [];
  
  await contacts(nombres,contactosChat)
  res.send({contactosChat})
};

const deleteChat = async (req, res) => {
  if (!req.body.chat)
    return res.status(404).send({ error: "no se pudo eliminar chat" });

  const chat = await Chat.deleteOne({ id: req.body.chat });
  if (chat.deletedCount === 1) {

    res.status(204).send("chat eliminado");
  } else {
    res.status(404).send({ error: "no se pudo eliminar chat" });
  }
};

module.exports = { getChats, newChat, deleteChat };
