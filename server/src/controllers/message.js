const Message = require("../models/Message");
const Chat = require("../models/Chat");
var mongoose = require("mongoose");
const addMessage = async (req, res) => {
  try {
    if (!req.body.message || !req.body.to) {
      return res.status(404).send({ error: "falta mensaje o destinatario" });
    }
    const { to, from, chat, message } = req.body;
    const mensaje = new Message({ message, to, from, chat });
    mensaje.save();

    const conversacion = await Chat.updateOne(
      { _id: chat },
      { $push: { messages: mensaje._id } }
    );

    res.send(conversacion);
  } catch (error) {
    res.send(error);
  }
};

const getMessages = async (req, res) => {
  try {
    const { chat } = req.query;
    var objectId = mongoose.Types.ObjectId(chat);

    const messages = await Message.find({ chat: objectId }).populate(
      "to from",
      "userName"
    );
    res.send(messages);
  } catch (error) {
    console.log(error);
  }
};

const updateMessage = async ({ params, body }, res) => {
  if (!body.message || !params.idMessage)
    return res
      .status(404)
      .send({ error: "faltan datos para poder actualizar" });
  const message = await Message.findOne({ id: body.idMessage });
  message.message = body.message;
  message.save();
  res.send(message);
};

const deleteMessage = async ({ params }, res) => {
  if (!params.idMessage) {
    return res.status(404).send({ error: "faltan datos para poder eliminar" });
  }

  const eliminar = await Message.deleteOne({ id: params.idMessage });

  if (eliminar.deletedCount === 1) {
    return res.sendStatus(204);
  }

  res.status(404).send({ error: "no existe mensaje" });
};

module.exports = { addMessage, getMessages, updateMessage, deleteMessage };
