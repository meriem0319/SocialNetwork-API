const userData = [
  {
    username: "jjRose",
    email: "janerose@abcd.com",
  },
  {
    username: "aManifestor",
    email: "annaball@mail.com",
  },
  {
    username: "kpkp123",
    email: "keithp@json.com",
  },
  {
    username: "wonderfulAmy",
    email: "amybaldwin@news.com",
  },
  {
    username: "eternalJack",
    email: "johnjack@hotmail.com",
  },
  {
    username: "someoneSaid",
    email: "iamwhoiam@send.com",
  },
  {
    username: "oneJohn",
    email: "johncarl@msn.com",
  },
  {
    username: "weAreone",
    email: "jessica@jspw.com",
  },
];

const pickRandomUser = () => {
  userData[Math.floor(Math.random() * userData.length)];
};

module.exports = { pickRandomUser, userData };
