// consts

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      id : 0 
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id : 1 
    }
  ];
  
const getMessageData = () => messages;


module.exports = {getMessageData};