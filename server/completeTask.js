require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;

  const task = await db.none(
    "UPDATE task SET is_complete=TRUE WHERE id=${id}",
    { id }
  );

  return {
    statusCode: 200,
    body: JSON.stringify(task)
  };
};
