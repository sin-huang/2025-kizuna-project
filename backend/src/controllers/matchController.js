
// 測試用資料
const currentUser = {
  id: 1,
  name: "你",
  age: 25,
  region: "Taipei",
  gender: "female",
  preference: "male",
  interests: ["music", "reading", "movies"]
};

// 篩選邏輯
const matchUsersLogic = (currentUser, allUsers) => {
  const matchedUsers = [];

  for (let user of allUsers) {
    if (user.id === currentUser.id) continue;

    const genderOk = currentUser.preference === "all" || user.gender === currentUser.preference;
    const userPrefOk = user.preference === "all" || currentUser.gender === user.preference;
    if (!genderOk || !userPrefOk) continue;

    let score = 0;

    const common = user.interests.filter(i => currentUser.interests.includes(i));
    score += common.length;

    if (Math.abs(user.age - currentUser.age) <= 3) {
      score += 1;
    }

    if (user.region === currentUser.region) {
      score += 2;
    }

    matchedUsers.push({
      id: user.id,
      name: user.name,
      score: score,
      commonInterests: common,
    });
  }
  // 分數排序
  matchedUsers.sort((a, b) => b.score - a.score);
  return matchedUsers.slice(0, 10);
};

// 這是 Express controller 的格式
const matchUsers = async (req, res) => {
  try {
    const allUsers = await req.db.query("SELECT * FROM users");
    const users = allUsers.rows;

    const results = matchUsersLogic(currentUser, users);
    res.json(results);
  } catch (err) {
    console.error("配對失敗:", err);
    res.status(500).json({ error: "伺服器錯誤" });
  }
};

module.exports = { matchUsers };
