const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  delteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router.route("/").get(getUserById).put(updateUser).delete(delteUser);

// /api/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
