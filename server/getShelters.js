require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const shelters = await db.any("SELECT * FROM shelter WHERE is_complete = false");

  return {
    statusCode: 200,
    body: JSON.stringify({ shelters })
  };
};
