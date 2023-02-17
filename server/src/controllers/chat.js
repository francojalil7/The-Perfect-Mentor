const { query } = require("express");
const Chat = require("../models/Chat");
const User = require("../models/User");
var mongoose = require("mongoose");
//var objectId = mongoose.Types.ObjectId(chat);
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

const contacts = async (nombres, contactosChat) => {
  const promises = nombres.map((id) => User.findOne({ id: id }));
  const users = await Promise.all(promises);
  users.forEach((user) => {
    const contact = { id: user.id, userName: user.userName };
    contactosChat.push(contact);
  });
};

const getChats = async (req, res) => {
  try {
    if (!req.query.id) return res.sendStatus(404);
    const chat = await Chat.find({ users: req.query.id }).populate("users");

    res.send(chat);
  } catch (error) {
    throw new Error(`Error al ver chats: ${error.message}`);
  }
};

const selectedChat = async (req, res) => {
  if (!req.query.id)
    return res.status(404).send({ error: "faltan parametros" });
  if (!req.query.to) {
    const chats = await Chat.find({ _id: req.query.id }).populate(
      "users messages",
      "email userName"
    );
    res.send(chats);
  } else {
    //SI ENVIO EL TO EN EL QUERY  viene desde la sección de buscador.
    //Recibe el id del usuario logueado y a la persona con la que tengo/quiero tener el chat.
    const chats = await Chat.find();

    const filtered = chats.filter(
      (chat) =>
        chat.users.includes(req.query.id) && chat.users.includes(req.query.to)
    );
    //Si no encontramos ningún chat que coincida, creamos uno
    if (!filtered.length) {
      const user1 = await User.findById({ _id: req.query.id });
      const user2 = await User.findById({ _id: req.query.to });

      const chat = new Chat();
      if (user1 != null && user2 != null) {
        chat.users.push(user1._id);
        chat.users.push(user2._id);
        chat.save();
        res.send(chat);
      } else {
        res.status(401).send("no se pudo crear chat");
      }
    } else {
      res.send(filtered);
    }
  }
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

module.exports = { getChats, newChat, deleteChat, selectedChat };
