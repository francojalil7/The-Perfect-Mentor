const Message = require("../models/Message");
const { socket } = require("../socket");

const addMessage = async ({ body, user }, res) => {
  const { message, to } = body;
  if (!message || !to) {
    return res.status(404).send({ error: "falta mensaje o destinatario" });
  }
  const mensaje = new Message({ message, to, from: user.id });
  mensaje.save();
  socket.io.emit("mensaje", mensaje);
  res.send(mensaje);
};

const getMessages = async ({ body, user }, res) => {
  const messages = await Message.find({ from: user.id, to: body.to })
    .populate("from", "userName")
    .populate("to", "userName")
    .exec();
  res.send(messages);
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
