require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const tasks = await db.any("SELECT * FROM task WHERE is_complete = false");

  return {
    statusCode: 200,
    body: JSON.stringify({ tasks })
  };
};
