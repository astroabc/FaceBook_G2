const Account = require("../models/Account.js");
const argon2 = require("argon2");

const getUserInfo = async (req, res) => {
  const { id } = req.body;
  try {
    const account = await Account.findById(id);
    let listPending = [];
    let listFriend = [];
    for (let i = 0; i < account.friendPending.length; i++) {
      const user = await Account.findById(account.friendPending[i]);
      listPending.push({
        id: user._id,
        user: user.user,
        avatar: user.avatar,
      });
    }
    for (let i = 0; i < account.friends.length; i++) {
      const acc = await Account.findById(account.friends[i]);
      listFriend.push({
        id: acc._id,
        user: acc.user,
        avatar: acc.avatar,
      });
    }
    res.status(200).json({
      user: account,
      success: true,
      message: "Account fetched successfully",
      listReq: listPending,
      listFr: listFriend,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const postUserSetting = async (req, res) => {
  const { avatar, user, pass, email, id } = req.body;
  try {
    const hashedPassword = await argon2.hash(pass);
    const update = await Account.findByIdAndUpdate(
      id,
      { avatar, user, email, pass: hashedPassword },
      { new: true },
    );
    await update.save();
    res.status(200).json({
      success: true,
      message: "Avatar updated successfully",
      account: update,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const putFriendAdd = async (req, res) => {
  const { id, myId } = req.body;
  try {
    const user = await Account.findByIdAndUpdate(id, {
      $addToSet: { friendPending: myId },
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "Friend added successfully",
      account: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const searchAccount = async (req, res) => {
  const { user } = req.body;
  try {
    const account = await Account.findOne({ user: user });
    res.status(200).json({
      success: true,
      message: "Search successfully",
      account: {
        id: account._id,
        user: account.user,
        avatar: account.avatar,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const searchAccountById = async (req, res) => {
  const { id } = req.body;
  try {
    let listRequest = [];
    for (let i = 0; i < id.length; i++) {
      const account = await Account.findById(id[i]);
      listRequest.push({
        user: account.user,
        avatar: account.avatar,
        id: account._id,
      });
    }
    res.status(200).json({
      success: true,
      message: "Search successfully",
      list: listRequest,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const addFriendToList = async (req, res) => {
  const { id, myId } = req.body;
  try {
    const account = await Account.findByIdAndUpdate(myId, {
      $addToSet: { friends: id },
    });
    const idDelete = account.friendPending.indexOf(id);
    account.friendPending.splice(idDelete, 1);
    await account.save();

    res.status(200).json({
      success: true,
      message: "Friend added successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const rejectFriend = async (req, res) => {
  const { id, myId } = req.body;
  try {
    const account = await Account.findById(myId);
    const idDelete = account.friendPending.indexOf(id);
    account.friendPending.splice(idDelete, 1);
    await account.save();
    res.status(200).json({
      success: true,
      list: account.friendPending,
      message: "Friend rejected successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUserInfo,
  postUserSetting,
  putFriendAdd,
  searchAccount,
  searchAccountById,
  addFriendToList,
  rejectFriend,
};
