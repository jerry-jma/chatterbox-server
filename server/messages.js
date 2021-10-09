var Messages = {
  _data: {
    results: [
    ]
  },

  // {
  //   "message_id": 39326,
  //   "roomname": "heavens drip",
  //   "text": "hello lo",
  //   "username": "ggg",
  //   "github_handle": "itsnormsyo",
  //   "campus": "hr-sfo",
  //   "created_at": "2021-10-08T22:17:57.391Z",
  //   "updated_at": "2021-10-08T22:17:57.391Z"
  // }
  _messageIdCounter: 9000,

  add: ({roomname = 'Lobby', text = 'Drip', username = 'Khai', campus = 'hr-sfo'}) => {
    var newMessage = {roomname, text, username, campus};
    // newMessage.roomname = roomname;
    // newMessage.text = text;
    // newMessage.username = username;
    // newMessage.campus = campus;

    //message_id
    newMessage['message_id'] = Messages._messageIdCounter;
    Messages._messageIdCounter++;

    //created_at
    newMessage['created_at'] = new Date();//current time?
    Messages._data.results.push(newMessage);
    //cleanUp()
    return;
  },

  items: () => { return Messages._data; },

  //cleanUp: () => {};

};

exports.Messages = Messages;