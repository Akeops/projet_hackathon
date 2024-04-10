const { User, Notice } = require("../models/associations");

async function createUser(user) {
  return await User.create(user);
}

async function getUsersById(id) {
  return await User.findByPk(id);
}

async function deleteUserById(id) {
  await User.destroy({
    where: {
      id: id,
    },
  });
}

async function getAllUsers(criterias = {}) {
  const where = {};
  if (criterias.nickname) {
    where.nickname = criterias.nickname;
  }
  if (criterias.email) {
    where.email = criterias.email;
  }
  if (criterias.password) {
    where.password = criterias.password;
  }
  return await User.findAll({ where });
}

async function addFavoriteToUser({ userId, toiletsId }) {
  const user = await getUsersById(userId);
  return await user.addToilets(toiletsId);
}

async function addNoticeToUser({ userId, toiletsId, comment, note }) {
  const user = await getUsersById(userId);

  if (!user) {
    throw new Error("User not found");
  }
  const notice = await Notice.create({
    UserId: user.id,
    ToiletId: toiletsId,
    comment,
    note,
  });
  console.log(notice);
  return notice;
}

module.exports = {
  createUser,
  getUsersById,
  getAllUsers,
  addFavoriteToUser,
  addNoticeToUser,
  deleteUserById,
};
