const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/VerifyToken");
const {
  getUserInfo,
  postUserSetting,
  putFriendAdd,
  searchAccount,
  searchAccountById,
  addFriendToList,
  rejectFriend,
} = require("../controllers/Account");

router.route("/user").post(verifyToken, postUserSetting);
router
  .route("/user/add-friend")
  .put(verifyToken, putFriendAdd)
  .post(verifyToken, addFriendToList);
router.route("/user/my-info").post(verifyToken, getUserInfo);
router.route("/user/search").post(verifyToken, searchAccount);
router
  .route("/user/search/request")
  .post(verifyToken, searchAccountById)
  .patch(verifyToken, rejectFriend);
module.exports = router;
