const db = require('../config/db');

const testUser = {
  name: "test",
  interests: ["reading", "music", "movies"]
};

const matchUsers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    const users = result.rows;

    const matches = users.filter(user => {
      if (!Array.isArray(user.interests)) return false;
      const common = user.interests.filter(i => testUser.interests.includes(i));
      return common.length >= 3;
    });

    res.json(matches);
  } catch (err) {
    console.error('❌ matchUsers error:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { matchUsers };
