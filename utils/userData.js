const userData = [
  {
    userName: "jjRose",
    email: "janerose@abcd.com",
  },
  {
    userName: "aManifestor",
    email: "annaball@mail.com",
  },
  {
    userName: "kpkp123",
    email: "keithp@json.com",
  },
  {
    userName: "wonderfulAmy",
    email: "amybaldwin@news.com",
  },
  {
    userName: "eternalJack",
    email: "johnjack@hotmail.com",
  },
  {
    userName: "someoneSaid",
    email: "iamwhoiam@send.com",
  },
  {
    userName: "oneJohn",
    email: "johncarl@msn.com",
  },
  {
    userName: "weAreone",
    email: "jessica@jspw.com",
  },
];

const pickRandomUser = () => {
  userData[Math.floor(Math.random() * userData.length)];
};

module.exports = { pickRandomUser, userData };
