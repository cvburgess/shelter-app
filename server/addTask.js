require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const { title, description } = event.queryStringParameters;

  const task = await db.none(
    "INSERT INTO task(title, description) VALUES(${title}, ${description})",
    { title, description }
  );

  return {
    statusCode: 200,
    body: JSON.stringify(task)
  };
};
